import { formatDate, getCurrentDate } from "@/shared/utils/date";
import { Box, Button, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const form = useForm({
    initialValues: {
      location: "",
      checkInDate: new Date(),
      checkOutDate: new Date(new Date().getTime() + 86400000),
    },

    validate: {
      location: (value) => (value.length < 3 ? "Location is too short" : null),
    },
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    const formattedCheckInDate = formatDate(
      values.checkInDate,
      "YYYY-MM-DDT00:00:00"
    );
    const formattedCheckOutDate = formatDate(
      values.checkOutDate,
      "YYYY-MM-DDT00:00:00"
    );
    navigate(
      `/hotel?location=${values.location}&checkInDate=${formattedCheckInDate}&checkOutDate=${formattedCheckOutDate}`
    );
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the home page. Go ahead and plan your travel</p>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "20px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Location"
            placeholder="Enter your location"
            required
            radius="md"
            {...form.getInputProps("location")}
          />

          <DatePickerInput
            label="Check-in Date"
            valueFormat="YYYY-MM-DD"
            required
            radius="md"
            placeholder="Select check-in date"
            minDate={new Date()}
            {...form.getInputProps("checkInDate")}
          />

          <DatePickerInput
            label="Check-out Date"
            valueFormat="YYYY-MM-DD"
            required
            radius="md"
            placeholder="Select check-out date"
            minDate={new Date(new Date().getTime() + 86400000)}
            {...form.getInputProps("checkOutDate")}
          />

          <Button
            type="submit"
            variant="outline"
            color="blue"
            radius="md"
            style={{ marginTop: "20px" }}
          >
            Search Hotel
          </Button>
        </form>
      </Box>
    </>
  );
};

export default HomePage;
