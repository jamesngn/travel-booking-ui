import { useGetListHotelQuery } from "../../api/hooks/hotel.hook";
import React from "react";
import HotelCardList from "./components/hotel-card-list";

const HotelPage: React.FC = () => {
  const { isLoading, data } = useGetListHotelQuery({
    location: "Melbourne",
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <HotelCardList hotelList={data} />
        </>
      )}
    </div>
  );
};

export default HotelPage;
