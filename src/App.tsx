import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./shared/components/layout/app-layout";
import HotelPage from "./pages/hotel.page";
import HotelDetailsPage from "./pages/hotel-details.page";
import HomePage from "./pages/home.page";
import ProtectedRoute from "./protected-route";
import LoginPage from "./shared/services/auth/login";
import MyBookingPage from "./pages/my-booking.page";
import Succes from "./pages/status.page/success";
import Loading from "./components/Loading";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Loading />}></Suspense>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotel"
          element={
            <ProtectedRoute>
              <HotelPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotel/:id"
          element={
            <ProtectedRoute>
              <HotelDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Succes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-booking"
          element={
            <ProtectedRoute>
              <MyBookingPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
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
