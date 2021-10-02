import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchContext } from "../../helpers/context/SearchContext";
import queryString from "query-string";
import Cards from "../menuComponents/courses/Cards";
import InputSearch from "../nav/InputSearch";
import Footer from "./Footer";
import { getCourse } from "../../helpers/getCourse";
import { sadFace } from "../../images/sadFace";

const Search = ({ history }) => {
  const { searchValue } = useContext(SearchContext);
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
          {q === "" && (
            <div className="results__searchSomething">
              Search a course <i className="fa fa-arrow-up fa-lg"></i>
            </div>
          )}
          {q !== "" && results.length === 0 && (
            <div>
              There is no course called {q} {sadFace}
            </div>
          )}
          {q &&
            results.map((value) => (
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
