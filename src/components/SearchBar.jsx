import React, { useEffect, useState } from "react";
import "./SearchBar.css";

import { TextField } from "@mui/material";

export default function SearchBar({ searchValue, setSearchValue }) {
  const [searchValueEntered, setSearchValueEntered] = useState(false);
  const [inputValue, setInputValue] = useState(searchValue);
  const [timeOut, setTimeOut] = useState(null);

  useEffect(() => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    const timer = setTimeout(() => {
      setSearchValue(inputValue);
      setSearchValueEntered(true);
    }, 1500);

    setTimeOut(timer);
  }, [inputValue]);

  function handleSearchValueChange(e) {
    setSearchValueEntered(true);
    setInputValue(e.target.value);
  }

  return (
    <div className="search-bar">
      <TextField
        id="standard-basic"
        label="Search a movie. For example: John Wick"
        variant="standard"
        value={inputValue}
        onChange={handleSearchValueChange}
        onKeyDown={(e) => {
          e.key === "Enter" && setSearchValue(e.target.value);
        }}
        error={searchValueEntered && searchValue.trim().length < 1}
        sx={{ width: "35ch" }}
      />
    </div>
  );
}
