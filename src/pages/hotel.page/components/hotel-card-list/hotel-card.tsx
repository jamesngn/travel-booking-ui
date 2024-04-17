import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";
import React from "react";
import { IHotelData } from "../../interfaces";
import { Link, useLocation } from "react-router-dom";

const HotelCard: React.FC<{ hotel: IHotelData }> = ({ hotel }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const checkInDate = searchParams.get("checkInDate");
  const checkOutDate = searchParams.get("checkOutDate");

  const images = [
    "https://image-tc.galaxy.tf/wijpeg-32t9ipw3els91lmic9p2rg01h/pool-3.jpg?rotate=0&crop=0%2C207%2C1707%2C989&width=1920",
    "https://media-cdn.tripadvisor.com/media/photo-s/0d/03/85/af/crown-towers-perth.jpg",
    "https://www.telegraph.co.uk/content/dam/Travel/hotels/australia/new-south-wales/sydney/park-hyatt-sydney-australia-product.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/98/00/90/exterior.jpg?w=700&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/e1/35/44/exterior.jpg?w=1200&h=-1&s=1",
    "https://www.telegraph.co.uk/content/dam/Travel/hotels/australia/northern-territory/darwin-waterfront-luxury-suites-p.jpg",
    "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/159/936/941/bnedt-entrance-0099-hor-clsc_O/Brisbane-Marriott-Hotel-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7XzMvWfQsJ1Ho7WwvbxRjPKuEat75ZeepJUsiD3p1A&s",
    "https://media-cdn.tripadvisor.com/media/photo-s/0e/54/17/8b/exterior.jpg",
    "https://www.nevistas.com/ul/4/2017/03/16/10.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pjXjfwmctlqXEiga4rUaR7-6vjbWUSA6068wPlD1pA&s",
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={randomImage} height={160} alt="Norway" />
      </Card.Section>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        mt="md"
        mb="xs"
      >
        <Text fw={500}>{hotel.name}</Text>
        <Badge color="orange">{hotel.location}</Badge>
      </Box>

      <Link
        to={`/hotel/${hotel.id}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`}
      >
        <Button color="blue" fullWidth mt="md" radius="md">
          Book Now
        </Button>
      </Link>
    </Card>
  );
};

export default HotelCard;
