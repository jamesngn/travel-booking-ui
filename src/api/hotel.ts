import { MutateFunction } from "@tanstack/react-query";

import { apiV1Instance } from "./axiosInstance/apiV1";
import { IHoteData } from "@/pages/hotel.page/interfaces";
import {
  IHotelDetailData,
  IRoomSelection,
} from "@/pages/hotel-details.page/interfaces";

type TMutationConfig = {
  name: string;
  fn: MutateFunction;
};

type TResponse<TData> = {
  serverDateTime: string;
  status: number;
  code: number;
  msg: string;
  exception: null | any;
  successful: boolean;
  data: TData;
};

export const getListHotelQuery = {
  name: "getListHotel",
  fn: async (data) => {
    const res = await apiV1Instance<TResponse<IHoteData[]>>({
      url: "/hotels/search",
      method: "POST",
      data,
    });

    const hotels = res.data.data;

    return hotels;
  },
};

export interface IHotelDetailQuery {
  hotelId: number;
  checkInDate: string;
  checkOutDate: string;
}

export const getHotelDetailQuery = {
  name: "getHotelDetail",
  fn: async (data: IHotelDetailQuery) => {
    const res = await apiV1Instance<TResponse<IHotelDetailData>>({
      url: `/hotel/detail`,
      method: "POST",
      data,
    });

    const hotel = res.data.data;

    return hotel;
  },
};

export interface IReserveRoomQuery {
  bookingId: number;
  hotelId: number;
  userId: number;
  checkInDate: string;
  checkOutDate: string;
  rooms: IRoomSelection[];
}

export const reserveRoomMutation = {
  name: "reserveRoom",
  fn: async (data?: any) => {
    const res = await apiV1Instance<TResponse<any>>({
      url: "/bookings/hotel/create",
      method: "POST",
      data,
    });

    const response = res.data.data;

    return response;
  },
};
