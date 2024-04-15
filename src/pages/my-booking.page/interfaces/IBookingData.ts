import { IRoomTypeData } from "@/pages/hotel-details.page/interfaces";
import { IHoteData } from "@/pages/hotel.page/interfaces";

export interface IBookingData {
  hotel: number;
  checkInDate: string;
  checkOutDate: string;
  rooms: IRoomTypeData[];
}
