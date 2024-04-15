import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const MyBookingBtn = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/my-booking")}>My Booking</Button>;
};

export default MyBookingBtn;
