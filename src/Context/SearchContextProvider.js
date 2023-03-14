import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState();

  return (
    <SearchContext.Provider value={[searchInput, setSearchInput]}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("context not found");
  else return context;
}

export { SearchContextProvider, useSearchContext };
