import React from "react";
import { IRoomTypeData } from "../../interfaces";
import { Box, Button } from "@mantine/core";
import RoomDetailCard from "./room-detail-card";
import { useRoomSelectionManagementStore } from "../../hooks/store";
import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useReserveRoomMutation } from "@/api/hooks/hotel.hook";
import { IReserveRoomQuery } from "@/api/hotel";
import { notifications } from "@mantine/notifications";

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

  const { id } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const checkInDate = searchParams.get("checkInDate");
  const checkOutDate = searchParams.get("checkOutDate");

  const navigate = useNavigate();

  const createHotelBooking = useReserveRoomMutation({
    onSuccess: () => {
      console.log("success");
      navigate("/success");
    },
    onError: () => {
      notifications.show({
        title: "Error",
        message: "An error occurred while reserving the room",
        color: "red",
      });
    },
  });

  const onReserveRoom = () => {
    const reserveRoomRequest: IReserveRoomQuery = {
      bookingId: 1,
      hotelId: Number(id),
      userId: 2,
      checkInDate,
      checkOutDate,
      rooms: roomSelection,
    };

    createHotelBooking.mutate(reserveRoomRequest);
  };

  return (
    <Box
      className="hotel-list-ctn"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Box style={{ maxWidth: "1400px" }}>
        {data.map((room, index) => (
          <RoomDetailCard
            key={index}
            data={room}
            currentRoomSelection={
              roomSelection.find(
                (roomSelection) => roomSelection.type === room.type
              ) || {
                type: room.type,
                quantity: 0,
              }
            }
            setRoomSelection={setRoomSelection}
          />
        ))}
      </Box>

      <Button disabled={isDisabled} fullWidth onClick={onReserveRoom}>
        I'll Reserve
      </Button>
    </Box>
  );
};

export default RoomCardList;
