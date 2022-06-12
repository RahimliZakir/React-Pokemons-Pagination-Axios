import React, { useState } from "react";

const CustomPagination = ({ pageSize, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              {
                /*eslint-disable*/
                <a
                  onClick={() => paginate(number)}
                  className="page-link"
                  style={{ cursor: "pointer" }}
                >
                  {number}
                </a>
                /*eslint-enable*/
              }
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CustomPagination;
