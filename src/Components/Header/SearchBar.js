import style from "./OfferHeader.module.css";
import { useState } from "react";
import { useSearchContext } from "../../Context/SearchContextProvider";

export function SearchBar({ text, icon }) {
  const [searchBar, setSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useSearchContext();
  function toggleSearchBar() {
    setSearchBar((value) => !value);
    setSearchInput("");
  }

  function modifySearch(event) {
    setSearchInput(event.currentTarget.value);
  }

  return searchBar === true ? (
    <>
      <input
        className={style.searchBar}
        onChange={modifySearch}
        placeholder="Search for Restaurant and Food"
        value={searchInput}
      />
      <span onClick={toggleSearchBar}>X</span>
    </>
  ) : (
    <>
      <span>{icon}</span>
      <span onClick={toggleSearchBar}>{text}</span>
    </>
  );
}
