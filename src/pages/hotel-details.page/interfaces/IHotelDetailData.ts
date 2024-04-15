import { IHotelData } from "@/pages/hotel.page/interfaces";
import { IRoomTypeData } from "./IRoomTypeData";

export interface IHotelDetailData {
  hotel: IHotelData;
  rooms: IRoomTypeData[];
}
