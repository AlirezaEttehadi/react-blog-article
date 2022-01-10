import React from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: 500 }}
    >
      <Card className="p-5" style={{ backgroundColor: "#FFF5EE" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNickName">
            <Form.Label>NickName</Form.Label>
            <Form.Control type="text" placeholder="NickName" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
}
