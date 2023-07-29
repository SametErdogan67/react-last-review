import React from "react";
import Container from "react-bootstrap/Container";
import PlayerCard from "./PlayerCard";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search Player..."
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-3 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter(({ img, name, statistics, i }) =>
              name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map(({ img, name, statistics, i }) => {
              return (
                <Col md={6} lg={4} xl={3}>
                  <PlayerCard
                    name={name}
                    img={img}
                    statistics={statistics}
                    key={i}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
