import { useGetListHotelQuery } from "../../api/hooks/hotel.hook";
import React from "react";
import HotelCardList from "./components/hotel-card-list";
import { useLocation, useParams } from "react-router-dom";

const HotelPage: React.FC = () => {
  //hotel?location=${values.location} extract location from the link

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const hotelLocation = searchParams.get("location");

  const { isLoading, data } = useGetListHotelQuery({
    location: hotelLocation || "",
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
