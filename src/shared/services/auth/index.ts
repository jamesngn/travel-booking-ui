import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { END_POINT } from "../end-point";
import { ILoginRequest, ILoginResponse } from "./dto";
import { IDTOServiceResponse } from "../models";

const { VITE_API_URL } = import.meta.env;

class AuthService {
  readonly COOKIE_AUTH_ID = "user_id";

  get isAuthenticated(): boolean {
    return !!Cookies.get(this.COOKIE_AUTH_ID);
  }

  get token(): string {
    return Cookies.get(this.COOKIE_AUTH_ID) ?? "";
  }

  setToken = (token: string, expiredIn: string) => {
    Cookies.set(this.COOKIE_AUTH_ID, token, {
      expires: new Date(Number(expiredIn ?? 0) * 1000),
    });
  };

  login = async (
    body: ILoginRequest
  ): Promise<IDTOServiceResponse<ILoginResponse>> => {
    try {
      const res = await axios.post<
        ILoginRequest,
        AxiosResponse<IDTOServiceResponse<ILoginResponse>>
      >(END_POINT.AUTH.LOGIN, body, {
        baseURL: VITE_API_URL,
      });

      const data = res.data.data;
      if (res.data.successful && data) {
        const today = new Date();
        const expiration = new Date(today.getTime() + 1000 * 60 * 60 * 24);
        Cookies.set(this.COOKIE_AUTH_ID, data.id, {
          expires: expiration,
        });
      }

      return res.data;
    } catch (error) {
      return {
        successful: false,
        error: error,
      };
    }
  };
  async getUser() {
    const id = Cookies.get(this.COOKIE_AUTH_ID);
    console.log(id);
    const response = await axios.get("http://localhost:3001/auth/user");
    return response.data;
  }

  logout = async (path?: string) => {
    this.removeAuth();
    let url = "/";
    if (path) url += `?callbackUrl=${path}`;
    window.location.assign(url);
  };

  removeAuth = () => {
    localStorage.clear();
    Cookies.remove(this.COOKIE_AUTH_ID);
  };
}

const Auth = new AuthService();
export default Auth;
