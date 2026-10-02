import React from "react";

function SearchBar({ keyword, keywordChange }) {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Cari catatan anda..."
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
    )

    SearchBar.propTypes = {
        keyword: PropTypes.string.isRequired,
        keywordChange: PropTypes.string.isRequired,
    }
}

export default SearchBar;