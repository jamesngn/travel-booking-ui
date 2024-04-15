export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
  username: string;
  email: string;
}
