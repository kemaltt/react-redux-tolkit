import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../stores/auth-slice";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);

  //         localStorage.setItem("userData", JSON.stringify(users));
  // const userData = JSON.parse(localStorage.getItem("users"));
  // console.log(userData);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (!users) {
        setErrorEmail(
          <p style={{ color: "red" }}>Please enter correct email or register</p>
        );
      } else {
        const userEmail = users.email;
        const userPassword = users.password;

        if (userPassword === password && userEmail === email) {
          setTimeout(() => {
            dispatch(login());
            setErrorEmail("Looks good!");
          }, 1000);
          // localStorage.setItem("userData", JSON.stringify(users));
          navigate("/");
        } else {
          setErrorPassword(
            <p style={{ color: "red" }}>
              Please enter correct password or email
            </p>
          );
        }
      }
    }

    setValidated(true);
  };

  return (
    <div className="register_container">
      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              placeholder="Email"
            />
            <Form.Control.Feedback>
              {errorEmail && errorEmail}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback>
              {errorPassword && errorPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="login_btn">
          <Button type="submit">Login</Button>
          <Button onClick={() => navigate("/register")}>Register</Button>
        </div>
      </Form>
    </div>
  );
}
