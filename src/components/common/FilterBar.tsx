import { useEffect, useState } from "react";
import { fetchBrands } from "../../services/carsApi";

interface FilterValues {
  brand?: string;
  price?: string;
  mileageFrom?: number;
  mileageTo?: number;
}

interface FilterBarProps {
  onSubmit: (values: FilterValues) => void;
}

const FilterBar = ({ onSubmit }: FilterBarProps) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const formatNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, ""); //
    if (!numbers) return "";
    return Number(numbers).toLocaleString("en-US"); //
  };

  const handleMileageFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatNumber(value);
    setMileageFrom(formatted);
  };

  const handleMileageToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatNumber(value);
    setMileageTo(formatted);
  };

  const prices = ["30", "40", "50", "60", "70", "80"];

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await fetchBrands();
        setBrands(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadBrands();
  }, []);

  const handleSubmit = () => {
    const values: FilterValues = {};

    if (selectedBrand) values.brand = selectedBrand;
    if (selectedPrice) values.price = selectedPrice;
    if (mileageFrom) values.mileageFrom = Number(mileageFrom.replace(/,/g, ""));
    if (mileageTo) values.mileageTo = Number(mileageTo.replace(/,/g, ""));

    onSubmit(values);
  };

  return (
    <div className="flex">
      <form
        action={handleSubmit}
        className="flex mx-auto  items-end gap-[16px] mt-[84px] mb-[56px] flex-wrap"
      >
        {/* Car brand dropdown */}
        <div className="w-[204px]">
          <label className="block text-[12px] text-[#8d929a] mb-[8px]">
            Car brand
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsBrandOpen(!isBrandOpen)}
              className="w-full px-[16px] py-[12px] text-left bg-background-alt  rounded-[12px]  flex justify-between items-center"
            >
              <span>{selectedBrand || "Enter the text"}</span>
              <svg
                width="16"
                height="16"
                className={`transform transition-transform ${
                  isBrandOpen ? "rotate-180" : ""
                }`}
              >
                <use href="/icons.svg#icon-arrow-default" />
              </svg>
            </button>

            {isBrandOpen && (
              <div className="absolute z-10 w-full mt-[4px] bg-white border border-background-alt rounded-[12px] max-h-[272px] overflow-y-auto">
                {brands.map((brand, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSelectedBrand(brand);
                      setIsBrandOpen(false);
                    }}
                    className={`w-full px-[18px] py-[7px] text-left text-[#8d929a] hover:text-dark-bg transition ease-linear duration-250 ${
                      selectedBrand === brand
                        ? "text-dark-bg"
                        : "text-[#8d929a]"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Price dropdown */}
        <div className="relative  w-[196px]">
          <label className="block text-[12px] text-[#8d929a] mb-[8px]">
            Price/ 1 hour
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
              className="w-full px-[16px] py-[12px] text-left bg-background-alt  rounded-[12px]  flex justify-between items-center"
            >
              <span>{selectedPrice ? `To $${selectedPrice}` : "To $"}</span>
              <svg
                width="16"
                height="16"
                className={`transform transition-transform ${
                  isPriceOpen ? "rotate-180" : ""
                }`}
              >
                <use href="/icons.svg#icon-arrow-default" />
              </svg>
            </button>

            {isPriceOpen && (
              <div className="absolute z-10 w-full mt-[4px] bg-white border border-background-alt rounded-[12px] max-h-[188px] overflow-y-auto">
                {prices.map((price) => (
                  <button
                    key={price}
                    type="button"
                    onClick={() => {
                      setSelectedPrice(price);
                      setIsPriceOpen(false);
                    }}
                    className={`w-full px-[18px] py-[7px] text-left text-[#8d929a] hover:text-dark-bg transition ease-linear duration-250 ${
                      selectedPrice === price
                        ? "text-dark-bg"
                        : "text-[#8d929a]"
                    }`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mileage inputs */}
        <div>
          <label className="block text-[12px] text-[#8d929a] mb-[8px]">
            Car mileage / km
          </label>
          <div className="flex">
            <div className="relative">
              <input
                type="text"
                value={mileageFrom}
                onChange={handleMileageFromChange}
                inputMode="numeric"
                className="w-[160px] pl-[66px] pr-[20px] py-[12px] bg-background-alt  rounded-l-[12px] "
              />
              <span className="absolute top-[12px] left-[24px] pointer-events-none">
                From
              </span>
            </div>
            <div className="w-[1px] bg-[#8d929a] "></div>
            <div className="relative">
              <input
                type="text"
                value={mileageTo}
                onChange={handleMileageToChange}
                inputMode="numeric"
                className="w-[160px] pl-[45px] pr-[20px] py-[12px] bg-background-alt rounded-r-[12px]"
              />
              <span className="absolute top-[12px] left-[24px] pointer-events-none">
                To
              </span>
            </div>
          </div>
        </div>

        {/* Search button */}
        <button
          type="submit"
          className="w-[156px] px-[20px] py-[12px] bg-primary text-white  rounded-[12px] hover:bg-primary-dark transition ease-linear duration-250"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FilterBar;
