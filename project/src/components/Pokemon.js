import React from "react";

import { capitalize } from "../utils/capitalize";

import { Col, Card } from "react-bootstrap";

const Pokemon = ({ cardItem, cardIndex, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Col xl={3} lg={3} md={3} sm={12} className="mt-5">
      <Card>
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
