import Auth from "@/shared/services/auth";
import { Box, Button, Input, InputLabel } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (Auth.token) {
      navigate("/");
    }
  }, [Auth.token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await Auth.login({ email, password });
    if (res.successful) {
      navigate("/");
    } else {
      alert(res.exception ?? "An error occurred");
    }
    setLoading(false);
  };

  return (
    <Box
      w={500}
      style={{
        margin: "auto",
        marginTop: "100px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <InputLabel htmlFor="password">Password:</InputLabel>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <Button type="submit" loading={loading}>
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
