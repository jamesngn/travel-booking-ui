import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import React from "react";
import { IHoteData } from "../../interfaces";
import { Link } from "react-router-dom";

const HotelCard: React.FC<{ hotel: IHoteData }> = ({ hotel }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://image-tc.galaxy.tf/wijpeg-32t9ipw3els91lmic9p2rg01h/pool-3.jpg?rotate=0&crop=0%2C207%2C1707%2C989&width=1920"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{hotel.name}</Text>
        <Badge color="orange">{hotel.location}</Badge>
      </Group>

      <Link to={`/hotel/${hotel.id}`}>
        <Button color="blue" fullWidth mt="md" radius="md">
          Book Now
        </Button>
      </Link>
    </Card>
  );
};

export default HotelCard;
