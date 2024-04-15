import HomeButton from "@/components/HomeButton/HomeButton";
import MyBookingBtn from "@/components/MyBookingButton/HomeButton";
import LogoutButton from "@/shared/services/auth/logout";
import { Box, Button, Text } from "@mantine/core";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid #ddd",
          padding: "20px",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {!isLoginPage ? <HomeButton /> : <div></div>}
          <h1> Trip Tailor </h1>
          {!isLoginPage ? (
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <MyBookingBtn />
              <LogoutButton />
            </div>
          ) : (
            <div></div>
          )}
        </Box>
      </header>

      {/* Main content */}
      <main
        style={{
          margin: "0 120px",
          height: "calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        {/* Add your footer content here */}
        Trip Tailor &copy; 2024
      </footer>
    </div>
  );
};

export default AppLayout;
