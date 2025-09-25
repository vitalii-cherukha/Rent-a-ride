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
    <div>
      {cars.map((car) => {
        const { city, country } = getAddressParts(car.address);
        return (
          <div key={car.id}>
            {/* image container */}
            <div>
              <img src={car.img} alt={car.model} />
              <button>
                <svg width="16" height="16">
                  <use />
                </svg>
              </button>
            </div>
            {/* title+price container */}
            <div>
              <h3>
                {car.brand}{" "}
                <span>
                  {car.model}, {car.year}
                </span>
              </h3>
              <p>${car.rentalPrice}</p>
            </div>
            {/* info container */}
            <div>
              <p>
                {city} | {country} | {car.rentalCompany}
              </p>
              <p>
                {car.type} | {car.mileage.toLocaleString("uk-UA")} km
              </p>
            </div>
            <Link to={`/catalog/${car.id}`}>Learn more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
