import { Button } from "@mantine/core";
import React from "react";
import Auth from "..";

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    // Add your logout logic here
    Auth.logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
