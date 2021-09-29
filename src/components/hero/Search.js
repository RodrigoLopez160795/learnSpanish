import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchContext } from "../../helpers/context/SearchContext";
import queryString from "query-string";
import courses from "../../helpers/courses";
import Cards from "../menuComponents/courses/Cards";
import InputSearch from "../nav/InputSearch";
import Footer from "./Footer";
import { getCourse } from "../../helpers/getCourse";

const Search = ({ history }) => {
  const { searchValue } = useContext(SearchContext);
  const search = searchValue;
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const results = getCourse(searchValue);
  console.log(results);
  return (
    <>
      <InputSearch history={history} q={q} />
      <div className="results__main">
        {q && <h4>Results of {q}</h4>}
        <div className="results__container">
          {q === "" && <div className="alert alert-info">Search a course</div>}
          {q !== "" && results.length === 0 && (
            <div className="alert alert-danger">
              There is no course called {q}
            </div>
          )}
          {results.map((value) => (
            <Cards
              key={value.id}
              title={value.title}
              author={value.author}
              video={value.video}
            />
          ))}
        </div>

        <Link to="/" className="results__link">
          <button className="results__button">
            <i className="fa fa-lock"></i>
            <span>Close</span>
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Search;
