import { useGetHotelBookingByUserQuery } from "@/api/hooks/booking.hook";
import Loading from "@/components/Loading";
import Auth from "@/shared/services/auth";
import { Box } from "@mantine/core";
import React from "react";
import BookingDetailCardList from "./components/booking-detail-card-list";

const MyBookingPage = () => {
  const userId = Auth.token || null;

  if (!userId) {
    return <div>Not authorized</div>;
  }

  const { data, isLoading } = useGetHotelBookingByUserQuery(Number(userId));
  const renderBookings = () => {
    if (isLoading) {
      return <Loading isLoading={isLoading} />;
    }

    if (data && data.length === 0) {
      return <div>No bookings found</div>;
    }

    return (
      <>
        <BookingDetailCardList bookingList={data} />
      </>
    );
  };

  return (
    <div>
      <h1>My Bookings</h1>
      <Box pos={"relative"} mih={200}>
        {renderBookings()}
      </Box>
    </div>
  );
};

export default MyBookingPage;
