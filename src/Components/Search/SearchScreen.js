import React from "react";
import { useParams } from "react-router-dom";
const SearchScreen = () => {
  const params = useParams();
  console.log(params);
  return <>Search Screen`{params.searchText}`</>;
};

export default SearchScreen;
