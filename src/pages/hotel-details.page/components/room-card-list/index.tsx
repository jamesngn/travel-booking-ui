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
import { set } from "lodash";
import Auth from "@/shared/services/auth";

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

  const userId = Auth.token || null;
  const [loading, setLoading] = React.useState(false);

  const createHotelBooking = useReserveRoomMutation({
    onSuccess: () => {
      setLoading(false);
      navigate("/success");
      notifications.show({
        title: "Success",
        message: "Room reserved successfully",
        color: "green",
      });
    },
    onError: () => {
      setLoading(false);
    },
  });

  const onReserveRoom = () => {
    const reserveRoomRequest: IReserveRoomQuery = {
      hotelId: Number(id),
      userId: Number(userId),
      checkInDate,
      checkOutDate,
      rooms: roomSelection,
    };
    setLoading(true);

    createHotelBooking.mutate(reserveRoomRequest);
  };

  return (
    <Box
      className="hotel-list-ctn"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        style={{
          maxWidth: "1400px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "calc(50vh)",
        }}
      >
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

      <Button
        disabled={isDisabled}
        fullWidth
        onClick={onReserveRoom}
        loading={loading}
      >
        I'll Reserve
      </Button>
    </Box>
  );
};

export default RoomCardList;
