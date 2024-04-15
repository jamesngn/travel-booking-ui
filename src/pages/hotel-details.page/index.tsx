import { Box, Paper } from "@mantine/core";
import { useGetHotelDetailQuery } from "../../api/hooks/hotel.hook";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import RoomCardList from "./components/room-card-list";
import { IHotelDetailQuery } from "@/api/hotel";
import { formatDate } from "@/shared/utils/date";

const HotelDetailsPage = () => {
  // extract id from the link
  const { id } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const checkInDate = searchParams.get("checkInDate");
  const checkOutDate = searchParams.get("checkOutDate");

  const hotelDetailQuery: IHotelDetailQuery = {
    hotelId: Number(id),
    checkInDate,
    checkOutDate,
  };

  const { isLoading, data: hotelDetails } =
    useGetHotelDetailQuery(hotelDetailQuery);

  return (
    <Box>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Paper
          style={{
            padding: "20px",
            margin: "20px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h1>{hotelDetails.hotel.name}</h1>
          {hotelDetails.rooms.length === 0 ? (
            <div>
              Sadly, there are no rooms available from {formatDate(checkInDate)}{" "}
              to {formatDate(checkOutDate)}
            </div>
          ) : (
            <RoomCardList data={hotelDetails.rooms} />
          )}
        </Paper>
      )}
    </Box>
  );
};

export default HotelDetailsPage;

// TODO: design the room details page -> show the room details under by room type in row by row and allow user to select to book
// TODO: BE - return hotel room details that are by room type, price, number of this room type available, and the hotel name, location,

// TODO: design the booking page
