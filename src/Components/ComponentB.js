import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Slices/postSlice";
import {
  Button,
  Card,
  // CardText,
  CardTitle,
  Col,
  Container,
  Table,
  Row,
} from "reactstrap";
import { reset } from "../Slices/counterSlice";

const ComponentB = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const { entities, loading } = useSelector((state) => state.post);
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
      <p></p>
      <Row>
        <Col md="3"></Col>
        <Col md="6">
          <Card body>
            <CardTitle tag="h3">Blog Posts</CardTitle>
            <hr />
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tittle</th>
                </tr>
              </thead>
              <tbody>
                {entities.map((post) => (
                  <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col md="3"></Col>
      </Row>
    </Container>
  );
};

export default ComponentB;
