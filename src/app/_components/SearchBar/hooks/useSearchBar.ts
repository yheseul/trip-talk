"use client";

import { ChangeEvent } from "react";
import { useSearchBarStore } from "../../../../commons/stores/useSearchBarStore";

export default function useSearchBar() {
  const { searchBar, setSearchBar } = useSearchBarStore();

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setSearchBar(searchWord);
  };

  return { onChangeSearch, searchBar };
}
