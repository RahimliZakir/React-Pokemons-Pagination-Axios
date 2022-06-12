import React, { useEffect } from "react";

const CustomPagination = ({ pageSize, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
    pageNumbers.push(i);
  }

  window.addEventListener("load", () => {
    const pageLinks = document.querySelectorAll(".page-link");
    if (pageLinks !== undefined) {
      pageLinks[0].className += " selected";
    }
  });

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              {
                /*eslint-disable*/
                <a
                  className="page-link"
                  onClick={(e) => paginate(number, e)}
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
