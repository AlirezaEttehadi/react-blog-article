import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignUp() {
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="mt-3 d-flex align-items-center">
            <div className="me-2">You have an account!</div>
            <Link to="/signin">Sign In</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}
