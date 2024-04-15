import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/")}>Home</Button>;
};

export default HomeButton;
