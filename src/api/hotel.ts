import { MutateFunction } from "@tanstack/react-query";

import { apiV1Instance } from "./axiosInstance/apiV1";
import { IHoteData } from "@/pages/hotel.page/interfaces";
import { IHotelDetailData } from "@/pages/hotel-details.page/interfaces";

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

export const getHotelDetailQuery = {
  name: "getHotelDetail",
  fn: async (id: number) => {
    const res = await apiV1Instance<TResponse<IHotelDetailData>>({
      url: `/hotel/detail/${id}`,
      method: "GET",
    });

    const hotel = res.data.data;

    return hotel;
  },
};
