import { create } from "zustand";
import { IRoomSelection } from "../interfaces/IRoomSelection";

type State = {
  roomSelection: IRoomSelection[];
};

type Action = {
  setRoomSelection: (value: IRoomSelection) => void;
};

export const useRoomSelectionManagementStore = create<State & Action>(
  (set) => ({
    roomSelection: [],
    setRoomSelection: (value) =>
      set((state) => {
        const existingRoomIndex = state.roomSelection.findIndex(
          (room) => room.roomType === value.roomType
        );

        if (existingRoomIndex !== -1) {
          // Update the existing room type
          const updatedRoomSelection = [...state.roomSelection];
          updatedRoomSelection[existingRoomIndex] = value;

          if (value.quantity === 0) {
            // Delete the room type if quantity is 0
            updatedRoomSelection.splice(existingRoomIndex, 1);
          }

          return {
            roomSelection: updatedRoomSelection,
          };
        } else {
          // Add new room type
          if (value.quantity !== 0) {
            return {
              roomSelection: [...state.roomSelection, value],
            };
          } else {
            // If quantity is 0, do not add it to the roomSelection
            return {
              roomSelection: state.roomSelection,
            };
          }
        }
      }),
  })
);
