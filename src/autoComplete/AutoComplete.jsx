import { useState } from "react";
import { suggestionsList } from "./countryList";
import "./style.scss"

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  
  const filterCountries = (query) => {
    const results = suggestionsList.filter(
      (country) =>
        country.substring(0, query.length).toLowerCase() === query.toLowerCase()
    );
    return results;
  };

  const getSearchedElements = (query) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(filterCountries(query));
      }, 1000);
    });
  };

  const searchHandler = async (value) => {
    setSearch(value);
    if (value.length > 0) {
      const result = await getSearchedElements(value);
      if (result.length > 0) {
        setShowSuggestion(true);
        setSearchResult(result);
      } else {
        setShowSuggestion(false);
        setSearchResult([]);
      }
    } else {
      setShowSuggestion(false);
      setSearchResult([]);
    }
  };

  const debounceFunc = (fn, delay = 500) => {
    let timer;
    return function () {
      const self = this;
      const args = arguments;
      if (timer) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apple(self, args), delay);
      }
    };
  };
  const handleClick = (value) => {
    setSearch(value);
    setShowSuggestion(false);
  };
  return (
    <div className="container">
      <h1>Search</h1>
      <input
      className="inputField"
        type="text"
        value={search}
        onChange={(event) => debounceFunc(searchHandler(event.target.value))}
      />
      {showSuggestion &&
        searchResult.map((elem) => {
          return (
            <li
            className="suggestion"
              key={elem}
              style={{ height: "25px", border: "1px solid black" }}
              onClick={(event) => handleClick(event.target.innerText)}
            >
              {elem}
            </li>
          );
        })}
    </div>
  );
};
export default AutoComplete;
