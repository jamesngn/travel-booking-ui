import { useGetListHotelQuery } from "../../api/hooks/hotel.hook";
import React from "react";
import HotelCardList from "./components/hotel-card-list";
import { useLocation, useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import { Box } from "@mantine/core";

const HotelPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelLocation = searchParams.get("location");

  const { isLoading, data } = useGetListHotelQuery({
    location: hotelLocation || "",
  });

  const renderHotels = () => {
    if (isLoading) {
      return <Loading isLoading={isLoading} />;
    }

    if (data && data.length === 0) {
      return <div>No hotels found</div>;
    }

    return <HotelCardList hotelList={data} />;
  };

  return (
    <div>
      <h1>Hotels</h1>
      <Box pos={"relative"} mih={200}>
        {renderHotels()}
      </Box>
    </div>
  );
};

export default HotelPage;
