import { useEffect, useState } from "react";
import type { FetchCarsParams } from "../../types/params";
import { fetchCars } from "../../services/carsApi";
import type { Car } from "../../types/cars";
import { Link } from "react-router";

interface ListProps {
  query: FetchCarsParams;
}

const getAddressParts = (address: string) => {
  const parts = address.split(",").map((part) => part.trim());
  const city = parts[parts.length - 2] || "N/A";
  const country = parts[parts.length - 1] || "N/A";

  return { city, country };
};

const List = ({ query }: ListProps) => {
  const [cars, setCars] = useState<Car[]>([]);

  const handleFavoriteClick = () => {
    // ###
  };

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars(query);
        setCars(data.cars);
      } catch (error) {
        console.error("Failed to fetch cars", error);
      }
    };
    loadCars();
  }, [query]);

  return (
    <ul className="flex flex-wrap gap-x-[32px] gap-y-[48px]">
      {cars.map((car) => {
        const { city, country } = getAddressParts(car.address);
        return (
          <li key={car.id} className="flex flex-col w-[276px] h-[424px]">
            {/* image container */}
            <div className="relative mb-[14px]">
              <img
                src={car.img}
                alt={car.brand}
                width="276"
                height="268"
                className="rounded-[12px] object-cover h-[268px] "
              />
              <button
                onClick={handleFavoriteClick}
                className="absolute top-[14px] right-[14px]"
              >
                <svg width="16" height="16">
                  <use href="./src/assets/images/icons.svg#icon-like-default" />
                </svg>
              </button>
            </div>
            {/* title+price container */}
            <div className="flex  justify-between">
              <h3>
                {car.brand} <span className="text-primary">{car.model}</span>,{" "}
                {car.year}
              </h3>
              <p>${car.rentalPrice}</p>
            </div>
            {/* info container */}
            <div className="flex-1">
              <p className="text-[12px] text-[#8d929a]">
                {city} | {country} | {car.rentalCompany}
              </p>
              <p className="text-[12px] text-[#8d929a]">
                {car.type} | {car.mileage.toLocaleString("uk-UA")} km
              </p>
            </div>
            <Link
              to={`/catalog/${car.id}`}
              className="
              block w-full
    bg-primary                 
    hover:bg-primary-dark   
    rounded-[12px] 
    py-[12px] 
    px-[20px]                    
    text-center  
    text-white
    transition ease-linear duration-250
"
            >
              Learn more
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
