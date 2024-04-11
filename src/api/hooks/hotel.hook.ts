import { MutationOptions, useMutation, useQuery } from "@tanstack/react-query";

import {
  getHotelDetailQuery,
  getListHotelQuery,
  IHotelDetailQuery,
  IReserveRoomQuery,
  reserveRoomMutation,
} from "../hotel";

export const useGetListHotelQuery = (data) => {
  return useQuery({
    queryKey: [getListHotelQuery.name, data],
    queryFn: () => {
      return getListHotelQuery.fn(data);
    },
  });
};

export const useGetHotelDetailQuery = (data: IHotelDetailQuery) => {
  return useQuery({
    queryKey: [getListHotelQuery.name, data],
    queryFn: () => {
      return getHotelDetailQuery.fn(data);
    },
  });
};

export const useReserveRoomMutation = (options?: MutationOptions) => {
  return useMutation({
    mutationKey: [reserveRoomMutation.name],
    mutationFn: reserveRoomMutation.fn,
    ...options,
  });
};
