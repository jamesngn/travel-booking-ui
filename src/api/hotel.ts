import { MutateFunction } from "@tanstack/react-query";

import { apiV1Instance } from "./axiosInstance/apiV1";

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
    const res = await apiV1Instance<TResponse<any>>({
      url: "/hotels/search",
      method: "POST",
      data,
    });

    const hotels = res.data.data;

    return hotels;
  },
};
