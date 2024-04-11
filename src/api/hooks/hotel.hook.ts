import { MutationOptions, useMutation, useQuery } from "@tanstack/react-query";

import { getHotelDetailQuery, getListHotelQuery } from "../hotel";

export const useGetListHotelQuery = (data) => {
  return useQuery({
    queryKey: [getListHotelQuery.name, data],
    queryFn: () => {
      return getListHotelQuery.fn(data);
    },
  });
};

export const useGetHotelDetailQuery = (id) => {
  return useQuery({
    queryKey: [getListHotelQuery.name, id],
    queryFn: () => {
      return getHotelDetailQuery.fn(id);
    },
  });
};
