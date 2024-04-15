import React from "react";
import { IBookingData } from "../../interfaces";
import BookingDetailCard from "../booking-detail-card";
import { Accordion, Box } from "@mantine/core";

const BookingDetailCardList: React.FC<{ bookingList: IBookingData[] }> = ({
  bookingList,
}) => {
  const renderBookings = () => {
    if (bookingList.length === 0) {
      return <div>No bookings found</div>;
    }

    return bookingList.map((booking, index) => (
      <BookingDetailCard bookingData={booking} key={index} />
    ));
  };

  return (
    <Box
      style={{
        overflowY: "scroll",
        maxHeight: "calc(100vh - 300px)",
      }}
    >
      <Accordion>{renderBookings()}</Accordion>
    </Box>
  );
};

export default BookingDetailCardList;
