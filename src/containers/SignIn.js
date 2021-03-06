import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: 500 }}
    >
      <Card className="p-5" style={{ backgroundColor: "#FFF5EE" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to="/dashboard">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Link>
          <div className="mt-3 d-flex align-items-center">
            <div className="me-2">You don'n have any account!</div>
            <Link to="/signup">Sign Up</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}
