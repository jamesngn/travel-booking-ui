import { useGetListHotelQuery } from "../../api/hooks/hotel.hook";
import React from "react";

const HotelResultsPage = () => {
  const { isLoading, data } = useGetListHotelQuery({
    location: "Melbourne",
  });

  console.log(data);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((hotel) => (
            <>
              <li key={hotel.id}>{hotel.location}</li>
              <li key={hotel.id}>{hotel.name}</li>
              <li key={hotel.id}>{hotel.price}</li>q
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelResultsPage;
