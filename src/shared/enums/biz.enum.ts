export enum RoomType {
  UNKNOWN = "UNKNOWN",
  SINGLE = "SINGLE",
  DOUBLE = "DOUBLE",
  DELUXE = "DELUXE",
  SUITE = "SUITE",
}

export const RoomTypeData = {
  [RoomType.UNKNOWN]: {
    name: "Unknown Room",
    description: "Unknown Room Type",
    label: "Unknown",
    color: "gray",
    imgSrc: "https://via.placeholder.com/150",
  },
  [RoomType.SINGLE]: {
    name: "Single Room",
    description: "This is a single room.",
    label: "Single",
    color: "blue",
    imgSrc:
      "https://www.hotelmonterey.co.jp/upload_file/monhtyo/stay/sng_600_001.jpg",
  },
  [RoomType.DOUBLE]: {
    name: "Double Room",
    description: "This is a double room.",
    label: "Double",
    color: "green",
    imgSrc:
      "https://djmzubtjl6upi.cloudfront.net/wp-content/uploads/sites/3/2017/12/Deluxe-Double-Guestroom2.jpg",
  },
  [RoomType.DELUXE]: {
    name: "Deluxe Room",
    description: "This is a deluxe room.",
    label: "Deluxe",
    color: "purple",
    imgSrc:
      "https://image-tc.galaxy.tf/wijpeg-azw1qbhwabnq4e7hbybb4kk9i/deluxe-room-king-2-2000px_wide.jpg?crop=0%2C83%2C2000%2C1125",
  },
  [RoomType.SUITE]: {
    name: "Suite Room",
    description: "This is a suite room.",
    label: "Suite",
    color: "orange",
    imgSrc:
      "https://gambarohotel.com.au/wp-content/uploads/2014/05/JG-Suite-lounge.jpg",
  },
};
