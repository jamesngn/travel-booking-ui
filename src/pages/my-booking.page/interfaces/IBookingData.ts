import { IRoomTypeData } from "@/pages/hotel-details.page/interfaces";
import { IHotelData } from "@/pages/hotel.page/interfaces";

export interface IBookingData {
  hotel: IHotelData;
  checkInDate: string;
  checkOutDate: string;
  rooms: IRoomTypeData[];
}
