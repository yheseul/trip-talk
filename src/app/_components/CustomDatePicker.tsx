import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarOutlined } from "@ant-design/icons";
import { useDateRangeStore } from "../../commons/stores/useDateRangeStore";

export default function CustomDatePicker() {
  const { dateRange, setDateRange } = useDateRangeStore();
  const [startDate, endDate] = dateRange;

  return (
    <div className="relative flex h-14">
      <CalendarOutlined className="absolute z-[100] left-3 top-3.5" />
      <DatePicker
        className="flex items-center w-64 gap-2 p-3 text-base font-normal text-center rounded-lg cursor-pointer text-dimGray bg-offWhite placeholder:flex placeholder:py-3 placeholder:pr-12 placeholder:gap-2 placeholder:w-64 placeholder:rounded-lg placeholder:text-dimGray placeholder:font-normal"
        selectsRange={true}
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        placeholderText="YYYY.MM.DD - YYYY.MM.DD"
        dateFormat="yyyy.MM.dd"
        onChange={(update) => {
          setDateRange(update);
        }}
      />
    </div>
  );
}
