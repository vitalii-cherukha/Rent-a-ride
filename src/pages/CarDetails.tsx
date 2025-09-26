import { useParams } from "react-router";
import { fetchCarById } from "../services/carsApi";
import { useEffect, useState } from "react";
import type { Car } from "../types/cars";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCar = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await fetchCarById(id);
        setCar(data);
      } catch (error) {
        console.error("Failed to fetch car by id:", error);
      }
    };
    loadCar();
  }, [id]);

  const getAddressParts = (address: string) => {
    const parts = address.split(",").map((part) => part.trim());
    const city = parts[parts.length - 2] || "N/A";
    const country = parts[parts.length - 1] || "N/A";

    return { city, country };
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!car) {
    return <p>Loading...</p>;
  }
  const { city, country } = getAddressParts(car.address);

  return (
    <div>
      {/* img + form container */}
      <div>
        <div>
          <img src={car.img} alt={car.brand} width="640" height="512" />
        </div>
        <div>
          <h2>Book your car now</h2>
          <p>Stay connected! We are always ready to help you.</p>
          <form action="">
            <input type="text" name="name" placeholder="Name*" required />
            <input type="email" name="email" placeholder="Email*" required />
            <input type="date" name="bookingDate" placeholder="Booking date" />
            <textarea name="comment" placeholder="Comment" rows={4} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      {/* info container */}
      <div>
        {/*  detail  */}
        <div>
          {/* title */}
          <div>
            <h2>
              {car.brand}{" "}
              <span>
                {car.model}, {car.year}
              </span>
            </h2>
            <p>{car.id}</p>
          </div>
          {/* info */}
          <div>
            <svg width={16} height={16}>
              <use />
            </svg>
            <p>
              {city}, {country}
            </p>
            <p>Mileage: {car.mileage.toLocaleString("uk-UA")} km</p>
          </div>
          <p>${car.rentalPrice}</p>
          <div>
            <p>{car.description}</p>
          </div>
        </div>
        {/* other information */}
        <div>
          {/* Rental Cond... */}
          <div>
            <h3>Rental Conditions:</h3>
            <ul>
              {car.rentalConditions.map((conditions, index) => {
                return (
                  <li key={index}>
                    <svg width="16" height="16">
                      <use />
                    </svg>
                    <p>{conditions}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Car Specific... */}
          <div>
            <h3>Car Specifications:</h3>
            <ul>
              <li>
                <svg width="16" height="16">
                  <use></use>
                </svg>
                <p>Year: {car.year}</p>
              </li>
              <li>
                <svg width="16" height="16">
                  <use></use>
                </svg>
                <p>Type: {car.type}</p>
              </li>
              <li>
                <svg width="16" height="16">
                  <use></use>
                </svg>
                <p>Fuel Consumption: {car.fuelConsumption}</p>
              </li>
              <li>
                <svg width="16" height="16">
                  <use></use>
                </svg>
                <p>Engine Size: {car.engineSize}</p>
              </li>
            </ul>
          </div>
          {/* Accessories... */}
          <div>
            <h3>Accessories and functionalities:</h3>
            <ul>
              {[...(car.accessories || []), ...(car.functionalities || [])].map(
                (item, index) => (
                  <li key={index}>
                    <svg width="16" height="16">
                      <use />
                    </svg>
                    <p>{item}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
