import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./shared/components/layout/app-layout";
import HotelPage from "./pages/hotel.page";
import HotelDetailsPage from "./pages/hotel-details.page";
import HomePage from "./pages/home.page";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/hotel/:id" element={<HotelDetailsPage />} />
        <Route path="/success" element={<h1>Successful Booking!</h1>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </AppLayout>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
