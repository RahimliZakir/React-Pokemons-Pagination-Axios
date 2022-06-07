import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";

import API from "./api";
import Pokemon from "./components/Pokemon";

const App = () => {
  const searchRef = useRef(null);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const getPokemons = async () => {
    const { data } = await API.get("/pokemon", {
      params: {
        limit: 150,
      },
    });
    setPokemons(data);
  };

  useEffect(() => {
    getPokemons();

    searchRef.current.focus();
  }, []);

  const filteredPokemons = pokemons?.results?.filter((item) => {
    if (search === "") {
      return pokemons;
    } else {
      //* 1st Way
      // return item.name.indexOf(search.toLowerCase()) !== -1;

      //* 2n Way
      return item.name.includes(search.toLowerCase());
    }
  });

  return (
    <div className="App py-3">
      <Container>
        <Row>
          <h1 className="text-center mb-5">Pokémons API</h1>
          <Col md={12}>
            <FormControl
              type="text"
              placeholder="Search here..."
              ref={searchRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          {filteredPokemons?.map((item, index) => {
            return (
              <Pokemon
                key={item.url}
                cardItem={item}
                cardIndex={item.url.slice(33, item.url.length - 1)}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default App;
