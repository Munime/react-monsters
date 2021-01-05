import "./searchbox.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="searchbox"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
