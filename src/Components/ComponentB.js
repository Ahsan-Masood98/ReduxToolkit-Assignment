import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import getPosts from "../Slices/postSlice";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { reset } from "../Slices/counterSlice";

const ComponentB = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const { entities, loading } = useSelector((state) => state?.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <h1>In Component B</h1>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Card body>
            <CardTitle tag="h3">
              From Component A <br />
              Counter
            </CardTitle>
            {/* <CardText> */}
            <span>{count === 0 ? <h2>Zero</h2> : <h2>{count}</h2>}</span>
            {/* </CardText> */}
            <Button color="warning" onClick={() => dispatch(reset())}>
              Reset
            </Button>
          </Card>
        </Col>
        <Col md="4"></Col>
      </Row>
      <div>
        <h2>Blog Posts</h2>
        {entities.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </Container>
  );
};

export default ComponentB;
