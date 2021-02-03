import React from "react";
import "./SearchBox.css";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input className="searchBox" type="search" placeholder="Search by country" onChange={searchChange} />
        </div>
    )
}

export default SearchBox;