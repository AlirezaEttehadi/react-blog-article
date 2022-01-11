import React, { useEffect, useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createNewUser, setUserError } from "../store/users/actions";

function SignUp({ _createNewUser, userError, _setUserError }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmedPasswordRef = useRef();

  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: 500 }}
    >
      <Card className="p-5" style={{ backgroundColor: "#FFF5EE" }}>
        <Form>
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
            <Button
              variant="primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                _createNewUser({
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                });
              }}
            >
              Submit
            </Button>
          </Link>
          <div className="mt-3 d-flex align-items-center">
            <div className="me-2">You have an account!</div>
            <Link to="/signin">Sign In</Link>
          </div>
        </Form>
        {userError && (
          <div style={{ color: "#ED4F32" }} className="mt-3">
            {userError}
          </div>
        )}
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userError: state.users.userError,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    _createNewUser: (data) => dispatch(createNewUser(data)),
    _setUserError: (data) => dispatch(setUserError(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
