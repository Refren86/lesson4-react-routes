import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
} from "react-bootstrap";

import { useAuth } from "../../hooks/useAuth";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    state: { pathname },
  } = useLocation();

  const submit = (e) => {
    e.preventDefault();

    const user = e.target.username.value;
    login(user, () => navigate(pathname, { replace: true }));
  };

  return (
    <div>
      <h2>Login</h2>

      <Form onSubmit={submit}>
        <FormLabel htmlFor="login">Enter username:</FormLabel>
        <InputGroup className="mb-3">
          <FormControl id="login" placeholder="Username" name="username" />
          <Button type="submit" variant={"dark"}>
            Login
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};
