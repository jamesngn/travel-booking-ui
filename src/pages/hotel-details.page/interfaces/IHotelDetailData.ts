import { IHoteData } from "@/pages/hotel.page/interfaces";
import { IRoomTypeData } from "./IRoomTypeData";

export interface IHotelDetailData {
  hotel: IHoteData;
  rooms: IRoomTypeData[];
}
