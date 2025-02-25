import { SearchOutlined } from "@ant-design/icons";
import Input from "../../Input/components/Input";
import useSearchBar from "../hooks/useSearchBar";
import { useSearchBarStore } from "../../../../commons/stores/useSearchBarStore";

export default function SearchBar() {
  const { onChangeSearch } = useSearchBar();
  const { searchBar } = useSearchBarStore();

  return (
    <div className="relative w-full gap-3 h-14">
      {!searchBar && <SearchOutlined className="absolute z-30 top-4 left-4" />}
      <Input
        id="text"
        required={false}
        onChange={onChangeSearch}
        value={searchBar}
      />
    </div>
  );
}
