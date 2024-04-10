import { MutationOptions, useMutation, useQuery } from "@tanstack/react-query";

import { getListHotelQuery } from "../hotel";

export const useGetListHotelQuery = (data) => {
  return useQuery({
    queryKey: [getListHotelQuery.name, data],
    queryFn: () => {
      return getListHotelQuery.fn(data);
    },
  });
};
