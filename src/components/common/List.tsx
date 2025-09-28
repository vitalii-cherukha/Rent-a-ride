import type { FetchCarsParams } from "../../types/params";
import { useEffect } from "react";
import { useCarsStore } from "../../store/carsStore";
import { useFavoritesStore } from "../../store/favoritesStore";
import { Link } from "react-router";
import Loader from "./Loader";

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
  const { cars, isLoading, page, totalPages, loadCars, loadMoreCars } =
    useCarsStore();
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const handleFavoriteClick = (carId: string) => {
    toggleFavorite(carId);
  };

  const handleLoadMore = () => {
    loadMoreCars(query);
  };

  useEffect(() => {
    loadCars(query);
  }, [query, loadCars]);

  if (isLoading && cars.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <ul className="flex flex-wrap gap-x-[32px] gap-y-[48px] mb-[80px] ">
        {cars.map((car) => {
          const { city, country } = getAddressParts(car.address);
          const isFavoriteItem = isFavorite(car.id);

          return (
            <li key={car.id} className="flex flex-col w-[276px] h-[424px]">
              {/* image container */}
              <div className="relative rounded-[12px] bg-dark-gradient mb-[14px]">
                <img
                  src={car.img}
                  alt={car.brand}
                  width="276"
                  height="268"
                  className="rounded-[12px] object-cover h-[268px] "
                />
                <button
                  onClick={() => handleFavoriteClick(car.id)}
                  className="absolute top-[14px] right-[14px]"
                >
                  <svg
                    width="16"
                    height="16"
                    className={`transition-transform duration-300 ${
                      isFavoriteItem ? "scale-110" : "scale-100"
                    }`}
                  >
                    <use
                      href={`/icons.svg#icon-like-${
                        isFavoriteItem ? "active" : "default"
                      }`}
                    />
                  </svg>
                </button>
              </div>
              {/* title+price container */}
              <div className="flex  justify-between ">
                <h3 className="leading-[1.25]">
                  {car.brand} <span className="text-primary">{car.model}</span>,{" "}
                  {car.year}
                </h3>
                <p>${car.rentalPrice}</p>
              </div>
              {/* info container */}
              <div className="flex-1">
                <p className="text-[12px] text-grey leading-[1.33]">
                  {city} | {country} | {car.rentalCompany}
                </p>
                <p className="text-[12px] text-grey leading-[1.33]">
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
    leading-[1.25]
    transition ease-linear duration-250
"
              >
                Learn more
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Load more button */}
      {page < totalPages && (
        <div className="text-center mb-[128px]">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="border border-solid border-primary hover:border-primary-dark w-[156px] rounded-[12px] py-[12px] px-[20px] transition ease-linear duration-250"
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </>
  );
};

export default List;
