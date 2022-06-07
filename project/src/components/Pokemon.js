import React from "react";

import { capitalize } from "../utils/capitalize";

import { Col, Card } from "react-bootstrap";

const Pokemon = ({ cardItem, cardIndex }) => {
  return (
    <Col md={3} className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardIndex}.png`}
        />
        <Card.Body className="text-center">
          <Card.Title>{capitalize(cardItem.name)}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Pokemon;
