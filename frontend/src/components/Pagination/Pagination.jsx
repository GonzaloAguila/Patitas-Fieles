import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css"


const Pagination = ({loading, dogsPerPage, totalDogs, paginate}) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
      pageNumbers.push(i)
  }

  console.log(pageNumbers, "ASDASDSA")
  return (
    <Fragment>
            <ul className="pagination-ul">
                {!loading ? pageNumbers.length > 0 && pageNumbers.map(number => {
                   return <li className="pagination-li" key={number}>
                          <Link onClick={() => paginate(number)}  to="/adoptar" className="pagination-link">{number}</Link>
                    </li>
                }): null}
            </ul>
    </Fragment>
  );
};

export default Pagination;