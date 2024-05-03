import { useState, useEffect } from "react";
import "../App.css";
import Cards from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";

/*interface RickAndMortyData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  }>;
}*/

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      {/*<Navbar />*/}
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="cards-grid">
        <Cards results={results || []} />
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default Characters;
