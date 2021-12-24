import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Pagination.css";
// https://www.youtube.com/watch?v=v91BLoapVDw&t=1256s&ab_channel=ViniciusDacal
// https://stackoverflow.com/questions/62954765/how-to-do-conditional-rendering-according-to-screen-width-in-react/62954922#62954922

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffSet }) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const maxWidthToRenderPagesNumber = 800;
  const currentPage = offset ? offset / limit + 1 : 1;
  const totalPages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  useEffect(() => {
    const handleResizeWindow = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleClick = (page) => {
    setOffSet((page - 1) * limit);
  };

  return (
    <ul className="pagination-list">
      <li>
        <button
          className="btn btn-secondary previous-next"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      {pageWidth > maxWidthToRenderPagesNumber ? (
        Array.from({ length: Math.min(MAX_ITEMS, totalPages) })
          .map((_, index) => index + firstPage)
          .map((page) => {
            if (page <= totalPages) {
              return (
                <li key={page}>
                  <button
                    className={
                      page === currentPage
                        ? "btn btn-secondary page-number-btn"
                        : "btn btn-light page-number-btn"
                    }
                    onClick={() => handleClick(page)}
                  >
                    {page}
                  </button>
                </li>
              );
            }
          })
      ) : (
        <button className="btn btn-light page-number-btn">{currentPage}</button>
      )}
      <li>
        <button
          className="btn btn-secondary previous-next"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  offset: PropTypes.number,
  setOffSet: PropTypes.func,
}.isRequired;

export default Pagination;
