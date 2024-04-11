import React from "react";
import { IRoomTypeData } from "../../interfaces";
import { Box, Button } from "@mantine/core";
import RoomDetailCard from "./room-detail-card";
import { useRoomSelectionManagementStore } from "../../hooks/store";
import { useForm } from "@mantine/form";

const RoomCardList: React.FC<{ data: IRoomTypeData[] }> = ({ data }) => {
  const roomSelection = useRoomSelectionManagementStore(
    (state) => state.roomSelection
  );
  const setRoomSelection = useRoomSelectionManagementStore(
    (state) => state.setRoomSelection
  );

  const isDisabled =
    roomSelection.length === 0 ||
    roomSelection.every((room) => room.quantity === 0);

  const form = useForm({
    initialValues: {
      roomSelection,
    },
    validate: (values) => {
      const errors = {};

      if (
        values.roomSelection.length === 0 ||
        values.roomSelection.every((room) => room.quantity === 0)
      ) {
        errors["roomSelection"] = "Please select at least one room";
      }

      return errors;
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    //TODO: Add API call to reserve the rooms
  };

  return (
    <Box
      className="hotel-list-ctn"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box style={{ maxWidth: "1400px" }}>
          {data.map((room, index) => (
            <RoomDetailCard
              key={index}
              data={room}
              currentRoomSelection={
                roomSelection.find(
                  (roomSelection) => roomSelection.roomType === room.type
                ) || {
                  roomType: room.type,
                  quantity: 0,
                }
              }
              setRoomSelection={setRoomSelection}
            />
          ))}
        </Box>

        <Button
          onClick={() => console.log(roomSelection)}
          disabled={isDisabled}
          fullWidth
        >
          I'll Reserve
        </Button>
      </form>
    </Box>
  );
};

export default RoomCardList;
