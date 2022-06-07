import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";

import API from "./api";
import Pokemon from "./components/Pokemon";

const App = () => {
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
  }, []);

  const filteredPokemons = pokemons?.results?.filter((item) => {
    if (search === "") {
      return pokemons;
    } else {
      return item.name.indexOf(search) !== -1;
    }
  });

  // const handlePokemonSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <div className="App">
      <Container>
        <Row>
          <h1 className="text-center">Pokemons API</h1>
          <Col md={12}>
            <FormControl
              type="text"
              placeholder="Search here..."
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
