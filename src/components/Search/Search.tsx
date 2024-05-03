import styles from "./Search.module.css";

interface SearchProps {
  setPageNumber: (pageNumber: number) => void;
  setSearch: (searchTerm: string) => void;
}

const Search = ({ setPageNumber, setSearch }: SearchProps) => {
  return (
    <form>
      <div className={styles.globalSerach}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          className={styles.input}
        />
        <button
          onClick={(e) => {
            e.preventDefault;
          }}
          type="submit"
          className={styles.btn}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
