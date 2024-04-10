import React from "react";
import { Box } from "@mantine/core";

import { IHotelDetail } from "../../interfaces";
import HotelCard from "./hotel-card";

const HotelCardList: React.FC<{ hotelList: IHotelDetail[] }> = ({
  hotelList,
}) => {
  return (
    <Box
      className="hotel-list-ctn"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 2fr))",
        gap: "20px",
      }}
    >
      {hotelList.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </Box>
  );
};

export default HotelCardList;
