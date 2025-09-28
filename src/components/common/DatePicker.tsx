import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

interface DatePickerProps {
  value: string;
  onChange: (isoDate: string) => void;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
}

const DatePicker = ({
  value,
  onChange,
  error,
  disabled,
  placeholder = "Booking date",
  name = "bookingDate",
}: DatePickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const fpRef = useRef<flatpickr.Instance | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      fpRef.current = flatpickr(inputRef.current, {
        dateFormat: "d.m.Y",
        minDate: "today",
        disableMobile: true,
        allowInput: false,
        clickOpens: true,
        animate: false,
        onChange: (selectedDates) => {
          const isoDate = selectedDates[0]
            ? selectedDates[0].toISOString().split("T")[0]
            : "";
          onChange(isoDate);
        },
        locale: {
          firstDayOfWeek: 1, // Понеділок
          weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          months: {
            shorthand: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            longhand: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
        },
      });
    }

    return () => {
      if (fpRef.current) fpRef.current.destroy();
    };
  }, [onChange]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        readOnly
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-[20px] py-[14px] bg-background-alt rounded-[12px] text-dark-bg leading-[1.25] cursor-pointer ${
          error ? "border-2 border-red-500" : ""
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
    </div>
  );
};

export default DatePicker;
