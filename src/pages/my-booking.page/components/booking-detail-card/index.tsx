import React from "react";
import { IBookingData } from "../../interfaces";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
  Box,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IHotelData } from "@/pages/hotel.page/interfaces";
import { formatDate } from "@/shared/utils/date";
import { RoomTypeData } from "@/shared/enums/biz.enum";

interface IBookingAccordionLabelProps {
  hotel: IHotelData;
  checkInDate: string;
  checkOutDate: string;
}

const AccordionLabel: React.FC<{
  accordionLabel: IBookingAccordionLabelProps;
}> = ({ accordionLabel }) => {
  return (
    <Group wrap="nowrap">
      <Image
        src="https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg"
        radius="md"
        height={175}
        opacity={0.7}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxHeight: "150px",
          padding: "10px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            gap: "20px",
            padding: "20px",
          }}
        >
          <div className="white-space"></div>
          <Text size="30px" fw={700} c={"var(--mantine-color-black)"}>
            {accordionLabel.hotel.name}
          </Text>
          <Badge size="lg">{accordionLabel.hotel.location}</Badge>
        </Box>
        <Box style={{ display: "flex", justifyContent: "end" }}>
          <Text size="md">
            {formatDate(accordionLabel.checkInDate)} -{" "}
            {formatDate(accordionLabel.checkOutDate)}
          </Text>
        </Box>
      </div>
    </Group>
  );
};

const BookingDetailCard: React.FC<{ bookingData: IBookingData }> = ({
  bookingData,
}) => {
  return (
    <AccordionItem
      value={
        bookingData.hotel.name +
        bookingData.checkInDate +
        bookingData.checkOutDate +
        bookingData.rooms
      }
      key={bookingData.hotel.name}
      style={{
        border: "3px solid var(--mantine-color-gray-2)",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <AccordionControl>
        <AccordionLabel
          accordionLabel={{
            hotel: bookingData.hotel,
            checkInDate: bookingData.checkInDate,
            checkOutDate: bookingData.checkOutDate,
          }}
        />
      </AccordionControl>
      <AccordionPanel>
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "10px",
          }}
        >
          {bookingData.rooms.map((room, index) => (
            <Box key={index}>
              <Image
                src={RoomTypeData[room.type].imgSrc}
                alt={room.type}
                radius="md"
                height={100}
                style={{ marginRight: "10px" }}
              />
              <Text size="lg" fw={700}>
                {RoomTypeData[room.type].name}
              </Text>
            </Box>
          ))}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default BookingDetailCard;
