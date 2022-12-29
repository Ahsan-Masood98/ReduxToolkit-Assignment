import React from "react";
import { useDispatch } from "react-redux";
import { Container, Button, Row, Col, Card, ButtonGroup } from "reactstrap";
import { decrement, increment } from "../Slices/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>In Component A</h1>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card body>
            <ButtonGroup>
              <Button
                color="success"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                style={{ width: "50%" }}
              >
                Increment
              </Button>
              <Button
                color="danger"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                style={{ width: "50%" }}
              >
                Decrement
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
