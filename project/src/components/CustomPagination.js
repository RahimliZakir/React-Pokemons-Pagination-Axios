import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const CustomPagination = ({
  pageSize,
  totalItems,
  paginate,
  prev,
  next,
  getLastPageIndex,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / pageSize); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    getLastPageIndex(pageNumbers[pageNumbers.length - 1]);
  }, [getLastPageIndex]);

  return (
    <nav>
      <ul className="pagination">
        {/*eslint-disable*/}
        <li className="page-item">
          <a className="page-link prev" onClick={prev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              {
                <a
                  className={`page-link nums ${number == 1 ? "selected" : ""}`}
                  onClick={(e) =>
                    paginate(number, pageNumbers[pageNumbers.length - 1], e)
                  }
                  style={{ cursor: "pointer" }}
                >
                  {number}
                </a>
              }
            </li>
          );
        })}
        <li className="page-item">
          <a
            className="page-link next"
            onClick={() => next(pageNumbers[pageNumbers.length - 1])}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </li>
        {/*eslint-enable*/}
      </ul>
    </nav>
  );
};

export default CustomPagination;
