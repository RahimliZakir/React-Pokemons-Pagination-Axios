import React from "react";

import { Col, Card, Button } from "react-bootstrap";

const Pokemon = ({ cardItem, cardIndex }) => {
  return (
    <Col md={3} className="mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardIndex}.png`}
        />
        <Card.Body className="text-center">
          <Card.Title>{cardItem.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Pokemon;
