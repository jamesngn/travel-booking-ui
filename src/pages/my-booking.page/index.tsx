import { useGetHotelBookingByUserQuery } from "@/api/hooks/booking.hook";
import Loading from "@/components/Loading";
import Auth from "@/shared/services/auth";
import { Box } from "@mantine/core";
import React from "react";

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

    return data.map((booking, index) => (
      <div key={index}>
        <h2>{booking.hotel}</h2>
        <p>Check in: {booking.checkInDate}</p>
        <p>Check out: {booking.checkOutDate}</p>
        {booking.rooms.map((room, index) => (
          <div key={index}>
            <h3>{room.type}</h3>
            <p>Price: {room.price}</p>
          </div>
        ))}
      </div>
    ));
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
