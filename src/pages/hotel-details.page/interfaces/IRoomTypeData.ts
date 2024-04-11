import { RoomType } from "@/shared/enums/biz.enum";

export interface IRoomTypeData {
  type: RoomType;
  price: number;
  availableRooms: number;
}
