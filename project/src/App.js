import React, { useEffect, useState, useRef, useMemo } from "react";
import { Container, Row, Col, FormControl } from "react-bootstrap";

import API from "./api";
import Pokemon from "./components/Pokemon";

//* 1. react-pagination
// import Pagination from "./components/Pagination";
//* 1. react-pagination

//* 2. react-paginate
// import ReactPaginate from "react-paginate";
//TODO: 1. External JS - import like style
// import "./dumb/react-paginate";
//TODO: 1. External JS - import like style
//* 2. react-paginate

//* 3. Custom Pagination
import CustomPagination from "./components/CustomPagination";
//* 3. Custom Pagination

//TODO: 2. External JS - with custom hook
// import ExternalJS from "./components/ExternalJS";
//TODO: 2. External JS - with custom hook

const App = () => {
  //TODO: 2. External JS - with custom hook
  // ExternalJS(
  //   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
  // );
  //TODO: 2. External JS - with custom hook

  //TODO: 3. External JS - componentDidMount - useEffect
  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "black";
  // }, []);
  //TODO: 3. External JS - componentDidMount - useEffect

  //* 3. Custom Pagination
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 15;
  //* 3. Custom Pagination

  const searchRef = useRef(null);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const getPokemons = async () => {
    setLoading(true);

    const { data } = await API.get("/pokemon", {
      params: {
        limit: 150,
      },
    });
    setPokemons(data);

    setLoading(false);
  };

  useEffect(() => {
    getPokemons();

    searchRef.current.focus();
  }, []);

  //! Burada Re-render-in qarshisini almaq uchun deyirem ki, Eger ya "search" ya "pokemons" deyishse tezeden map ele, olmasa eleme!
  const filteredPokemons = useMemo(() => {
    return pokemons?.results?.filter((item) => {
      if (search === "") {
        return pokemons;
      } else {
        //* 1st Way
        // return item.name.indexOf(search.toLowerCase()) !== -1;

        //* 2nd Way
        return item.name.includes(search.toLowerCase());
      }
    });
  }, [pokemons, search]);

  //* 1. react-pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 15;
  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   return filteredPokemons?.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, filteredPokemons]);
  //* 1. react-pagination

  //* 2. react-paginate
  // // We start with an empty list of items.
  // const [currentItems, setCurrentItems] = useState(null);
  // const [pageCount, setPageCount] = useState(0);
  // // Here we use item offsets; we could also use page offsets
  // // following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 15;
  // useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(filteredPokemons?.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(filteredPokemons?.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage, filteredPokemons]);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset =
  //     (event.selected * itemsPerPage) % filteredPokemons?.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  //* 2. react-paginate

  //* 3. Custom Pagination
  // Get Current Pokemons
  const indexOfLastPokemon = pageIndex * pageSize;
  const indexOfFirstPokemon = indexOfLastPokemon - pageSize;
  const currentPokemons = filteredPokemons?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  // Get Current Pokemons

  // Change Page
  const paginate = (pageNumber) => setPageIndex(pageNumber);
  // Change Page
  //* 3. Custom Pagination

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
          {currentPokemons?.map((item) => {
            return (
              <Pokemon
                key={item.url}
                loading={loading}
                cardItem={item}
                cardIndex={item.url.slice(33, item.url.length - 1)}
              />
            );
          })}
          {
            //* 1. react-pagination
            /* <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={150}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          /> */
            //* 1. react-pagination
          }
          {
            //* 2. react-paginate
            // <ReactPaginate
            //   breakLabel="..."
            //   nextLabel="next >"
            //   onPageChange={handlePageClick}
            //   pageRangeDisplayed={3}
            //   pageCount={pageCount}
            //   previousLabel="< previous"
            //   renderOnZeroPageCount={null}
            // />
            //* 2. react-paginate
            //* 3. Custom Pagination
            <CustomPagination
              pageSize={pageSize}
              totalItems={filteredPokemons?.length}
              paginate={paginate}
            />
            //* 3. Custom Pagination
          }
        </Row>
      </Container>
    </div>
  );
};

export default App;
