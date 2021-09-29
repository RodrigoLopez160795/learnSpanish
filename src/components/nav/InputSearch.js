import React, { useContext } from "react";
// import { SearchContext } from "../../helpers/context/SearchContext";
import glassMagnifier from "../../images/glassMagnifier.svg";
const InputSearch = () => {
  // const {setSearch} = useContext(SearchContext);
  // const handleClick = () => {
  //   setSearch(false);
  // }
  return (
    <div className="navbar__inputSearch">
      <input type="text" placeholder="Search" autoComplete="off" />
      <div className="navbar__glass pointer">
        <img
          src={glassMagnifier}
          alt="Glass magnifier"
          // onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default InputSearch;
