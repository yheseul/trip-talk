import { usePathname } from "next/navigation";
import Button from "./Button/components/Button";
import CustomDatePicker from "./CustomDatePicker";
import SearchBar from "./SearchBar/components/SearchBar";
import { useRouter } from "next/navigation";

const FilterBar = () => {
  const path = usePathname();
  const isPurchasePage = path.includes("purchase");
  const router = useRouter();

  const handleNavigate = () => {
    if (isPurchasePage) router.push("#");
    else router.push("/boards/new");
  };

  return (
    <div className="flex flex-col justify-between w-full md:gap-3 md:flex-row">
      <div className="flex flex-col md:gap-3 grow md:flex-row">
        <div>
          <CustomDatePicker />
        </div>
        <div className="flex w-full gap-3">
          <div className="grow">
            <SearchBar />
          </div>
          <div className="grow-2">
            <Button color="black" id="search" />
          </div>
        </div>
      </div>
      <div className="grow-4">
        <Button
          color="blue"
          id={isPurchasePage ? "sale" : "register"}
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
};

export default FilterBar;
