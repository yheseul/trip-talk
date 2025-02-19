import { SearchOutlined } from "@ant-design/icons";
import CustomDatePicker from "../../CustomDatePicker";
import Input from "../../Input";

export default function BoardListMenu() {
  // const { onChangeSearch } = useBoardListMenu();
  return (
    <div className="gap-3 pb-5">
      <CustomDatePicker />
      <div className="relative w-full gap-3 h-14">
        <SearchOutlined className="absolute z-30 top-6 left-4" />
        <Input id="text" required={false} />
      </div>
    </div>
  );
}
