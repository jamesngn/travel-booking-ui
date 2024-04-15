import { useQuery } from "@tanstack/react-query";
import { getHotelBookingListByUserIdQuery } from "../booking";

export const useGetHotelBookingByUserQuery = (userId: number) => {
  return useQuery({
    queryKey: [getHotelBookingListByUserIdQuery.name, userId],
    queryFn: () => {
      return getHotelBookingListByUserIdQuery.fn(userId);
    },
  });
};
