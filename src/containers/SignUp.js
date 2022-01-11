import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createNewUser } from "../store/users/actions";

function SignUp({ _createNewUser }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmedPasswordRef = useRef();

  const createUser = () => {
    console.log("123123");
  };

  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: 500 }}
    >
      <Card className="p-5" style={{ backgroundColor: "#FFF5EE" }}>
        <Form onSubmit={createUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={confirmedPasswordRef}
            />
          </Form.Group>
          <Link to="/dashboard">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Link>
          <div className="mt-3 d-flex align-items-center">
            <div className="me-2">You have an account!</div>
            <Link to="/signin">Sign In</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    _createNewUser: (data) => dispatch(createNewUser(data)),
  };
}

export default connect(null, mapDispatchToProps)(SignUp);
