import React, { useContext } from "react";
import { SearchContext } from "../../helpers/context/SearchContext";
import { useForm } from "../../hooks/useForm";
import glassMagnifier from "../../images/glassMagnifier.svg";
const InputSearch = ({ history,q }) => {
  const { setSearchValue } = useContext(SearchContext);
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(searchText);
    history.push(`/search?q=${searchText}`);
  };

  return (
    <form onSubmit={handleSearch} className="navbar__inputSearch">
      <input
        type="text"
        placeholder="Search"
        autoComplete="off"
        name="searchText"
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="navbar__glass" type="submit">
        <img src={glassMagnifier} alt="Glass magnifier" className="focus"/>
      </button>
    </form>
  );
};

export default InputSearch;
