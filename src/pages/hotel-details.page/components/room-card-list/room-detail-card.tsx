import { Text, Button, Box, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import React from "react";
import { IRoomTypeData } from "../../interfaces";
import { RoomTypeData } from "@/shared/enums/biz.enum";
import { IRoomSelection } from "../../interfaces/IRoomSelection";

interface IRoomDetailCardProps {
  data: IRoomTypeData;
  currentRoomSelection: IRoomSelection;
  setRoomSelection: (value: IRoomSelection) => void;
}

const RoomDetailCard: React.FC<IRoomDetailCardProps> = ({
  data,
  currentRoomSelection,
  setRoomSelection,
}) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "100px",
        backgroundColor: "whitesmoke",
      }}
    >
      <div style={{ width: "1000px" }}>
        <img
          style={{ width: "100%", height: "175px", objectFit: "cover" }}
          src={
            RoomTypeData[data.type].imgSrc || "https://via.placeholder.com/150"
          }
          alt="room"
        />
      </div>
      <Box
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          {RoomTypeData[data.type].name}
        </Text>
        <Text>Price: ${data.price}</Text>
        <Text>Number of rooms available: {data.availableRooms}</Text>
        <Text>{RoomTypeData[data.type].description}</Text>

        <NumberInput
          label="Number of rooms"
          min={0} // Set minimum value to 1
          max={data.availableRooms}
          value={currentRoomSelection.quantity}
          onChange={(value) => {
            setRoomSelection({ type: data.type, quantity: Number(value) });
          }}
          required
        />
      </Box>
    </Box>
  );
};

export default RoomDetailCard;
