import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { Input } from "./styles";

const SearchBar = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const deboucedChange = useDebounce(onChange, 500);

  const handleChange = (e) => {
    setDisplayValue(e.target.value);
    deboucedChange(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Busque por algum personagem..."
        value={displayValue}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
