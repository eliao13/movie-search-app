import React, { useState } from "react";
import "./SearchBar.css";

import { TextField } from "@mui/material";

export default function SearchBar({ searchValue, setSearchValue }) {
  const [searchValueEntered, setSearchValueEntered] = useState(false);

  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
    setSearchValueEntered(true);
  }

  return (
    <div className="search-bar">
      <TextField
        id="standard-basic"
        label="Search a movie. For example: John Wick"
        variant="standard"
        value={searchValue}
        onChange={handleSearchValueChange}
        error={searchValueEntered && searchValue.trim().length < 1}
        sx={{ width: "35ch" }}
      />
    </div>
  );
}
