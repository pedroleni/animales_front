import "./SearchBar.css";
import { useState } from "react";
const SearchBar = ({ setFilterWord }) => {
  // const [type, setType] = useState("")
  // const valueFilter = () =>{ button.value?
  //   (search.value.toLowerCase()+button.value
  //   ) : (
  //   search.value.toLowerCase())
  // }

  return (
    <>

      <input
        type="text"
        id="search"
        className="searchbar"
        onChange={() => setFilterWord(search.value.toLowerCase())}
        placeholder="Search by name, brand or description"
      />

<div className="container_button">
        <button
          type="button"
          value="inlove"
          onClick={() => setFilterWord("inlove")}
        >
          In love
        </button>
        <button
          type="button"
          vale="soltero"
          onClick={() => setFilterWord("soltero")}
        >
          Single
        </button>
      </div>
    </>
  );
};

export default SearchBar;
