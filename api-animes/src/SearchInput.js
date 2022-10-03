import React, { useState } from "react";
import useDebounce from "./useDebounce";

const SearchInput = ({ value, onchange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onchange, 500);

    function handleChange(event){
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    return (
        <input 
        type="search"
        value={displayValue}
        onChange={handleChange}
        />

    );
};

export default SearchInput;