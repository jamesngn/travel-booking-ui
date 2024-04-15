import { IBookingData } from "@/pages/my-booking.page/interfaces";
import { apiV1Instance } from "./axiosInstance/apiV1";

type TResponse<TData> = {
  serverDateTime: string;
  status: number;
  code: number;
  msg: string;
  exception: null | any;
  successful: boolean;
  data: TData;
};

export const getHotelBookingListByUserIdQuery = {
  name: "getBookingListByUserId",
  fn: async (userId: number) => {
    const res = await apiV1Instance<TResponse<IBookingData[]>>({
      url: `/bookings/hotel/user/${userId}`,
      method: "GET",
    });

    const bookings = res.data.data;

    return bookings;
  },
};
