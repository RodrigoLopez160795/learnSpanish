import React, { useState } from "react";
import { SearchContext } from "./helpers/context/SearchContext";
import AppRouter from "./routers/AppRouter";

const LearnSpanish = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <SearchContext.Provider
        value={{ searchValue, setSearchValue }}
      >
        <AppRouter />
      </SearchContext.Provider>
    </div>
  );
};

export default LearnSpanish;
