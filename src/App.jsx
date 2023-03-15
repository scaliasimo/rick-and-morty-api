import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/header/index";
import Search from "./components/search-bar/index";
import Card from "./components/card/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { GlobalStyle } from "./styles";

const App = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);

  // calling fetchData by useEffect when page number changed
  const fetchData = useCallback(async () => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;
    const array = await fetch(url).then((res) => res.json());
    /* checking data.results is not zero */
    if (array?.results?.length) {
      // combining new results with old results and reupdating useState
      if (search.length || page === 1) {
        setData(array.results);
      } else {
        setData((prev) => [...prev, ...array.results]);
      }
    }
  }, [page, search]);

  // calling useEffect when page number changed
  useEffect(() => {
    fetchData();
  }, [page, fetchData, search]);

  return (
    <>
      <GlobalStyle />
      <Header />
      {/* checking data is not zero */}
      {!!data?.length && (
        <>
          <Search
            setSearch={setSearch}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
          <InfiniteScroll
            dataLength={data.length}
            next={() => setPage(page + 1)}
            hasMore={true}
          >
            {/* using InfiniteScroll */}
            <Card
              results={data}
              dropdown={dropdown}
            />
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default App;
