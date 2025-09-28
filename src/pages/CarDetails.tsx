import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { fetchCarById } from "../services/carsApi";
import { useEffect, useState } from "react";
import type { Car } from "../types/cars";
import Loader from "../components/common/Loader";
import Container from "../components/layout/Container";
import DatePicker from "../components/common/DatePicker";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState<string>("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadCar = async () => {
      if (!id) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await fetchCarById(id);
        setCar(data);
      } catch {
        setError(true);
        setTimeout(() => {
          navigate("/not-found", { replace: true });
        }, 2000);
      } finally {
        setIsLoading(false);
      }
    };
    loadCar();
  }, [id, navigate]);

  const getAddressParts = (address: string) => {
    const parts = address.split(",").map((part) => part.trim());
    const city = parts[parts.length - 2] || "N/A";
    const country = parts[parts.length - 1] || "N/A";

    return { city, country };
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error || !car) {
    return <Loader />;
  }
  const { city, country } = getAddressParts(car.address);

  return (
    <Container>
      <div className="flex-col-reverse max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:justify-center gap-8 md:gap-12 lg:gap-[72px] pt-10 md:pt-16 lg:pt-[84px] pb-16 md:pb-20 lg:pb-[104px]">
        {/* img + form container */}
        <div className="flex flex-col gap-[40px] w-[650px]">
          <img
            className="w-full rounded-[19px] object-cover bg-dark-gradient"
            src={car.img}
            alt={car.brand}
            width="640"
            height="512"
          />

          <div
            className="flex flex-col gap-[24px]
         border border-border-light rounded-[10px] p-[32px] max-w-[640px]"
          >
            <div>
              <h2 className="text-[20px] font-semibold mb-[8px] leading-[1.20]">
                Book your car now
              </h2>
              <p className=" text-text-grey leading-[1.25]">
                Stay connected! We are always ready to help you.
              </p>
            </div>

            <form className="flex flex-col gap-[16px]">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="w-full text[16px] px-[20px] py-[14px] bg-background-alt rounded-[12px] text-dark-bg placeholder-text-grey leading-[1.25]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="w-full px-[20px] py-[14px] bg-background-alt rounded-[12px] text-dark-bg placeholder-text-grey leading-[1.25]"
              />

              <DatePicker
                value={bookingDate}
                onChange={setBookingDate}
                placeholder="Booking date"
              />

              <textarea
                name="comment"
                placeholder="Comment"
                rows={4}
                className="w-full h-[88px] px-[20px] py-[14px] bg-background-alt rounded-[12px] text-dark-bg placeholder-text-grey resize-none leading-[1.25]"
              />

              <button
                type="submit"
                className="mt-[8px] mx-auto w-[156px] py-[12px] bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-dark transition ease-linear duration-250 mt-[6px] leading-[1.25]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        {/* info container */}
        <div className="w-[488px] mt-[20px]">
          {/* title */}
          <div className="mb-[68px]">
            <div className="flex items-baseline mb-[8px]">
              <h2 className="text-[24px] mr-[16px] leading-[1.33] font-semibold">
                {car.brand}{" "}
                <span>
                  {car.model}, {car.year}
                </span>
              </h2>
              <p className="text-grey">id: {car.id.slice(0, 4)}</p>
            </div>
            <div className="h-[16px] flex items-center mb-[16px]">
              <svg width={16} height={16} className="mr-[4px]">
                <use href="/icons.svg#icon-location" />
              </svg>
              <p className="mr-[16px]">
                {city}, {country}
              </p>
              <p>Mileage: {car.mileage.toLocaleString("uk-UA")} km</p>
            </div>
            <p className="leading-[1.33] font-semibold text-[24px] text-primary">
              ${car.rentalPrice}
            </p>
            <div className="mt-[32px]">
              <p className="leading-[1.25]">{car.description}</p>
            </div>
          </div>
          {/* other information */}
          <div className="flex flex-col gap-[110px]">
            <div>
              <h3 className="text-[20px] mb-[20px] leading-[1.20] font-semibold">
                Rental Conditions:
              </h3>
              <ul className="flex flex-col gap-[16px]">
                {car.rentalConditions.map((conditions, index) => {
                  return (
                    <li key={index} className="flex items-center">
                      <svg width="16" height="16" className="mr-[8px]">
                        <use href="/icons.svg#icon-check" />
                      </svg>
                      <p className="leading-[1.25]">{conditions}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Car Specific... */}
            <div>
              <h3 className="text-[20px] mb-[20px] leading-[1.20] font-semibold">
                Car Specifications:
              </h3>
              <ul className="flex flex-col gap-[16px]">
                <li className="flex items-center">
                  <svg width="16" height="16" className="mr-[8px]">
                    <use href="/icons.svg#icon-calendar" />
                  </svg>
                  <p className="leading-[1.25]">Year: {car.year}</p>
                </li>
                <li className="flex items-center">
                  <svg width="16" height="16" className="mr-[8px]">
                    <use href="/icons.svg#icon-car" />
                  </svg>
                  <p className="leading-[1.25]">Type: {car.type}</p>
                </li>
                <li className="flex items-center">
                  <svg width="16" height="16" className="mr-[8px]">
                    <use href="/icons.svg#icon-fuel-pump" />
                  </svg>
                  <p className="leading-[1.25]">
                    Fuel Consumption: {car.fuelConsumption}
                  </p>
                </li>
                <li className="flex items-center">
                  <svg width="16" height="16" className="mr-[8px]">
                    <use href="/icons.svg#icon-gear" />
                  </svg>
                  <p className="leading-[1.25]">
                    Engine Size: {car.engineSize}
                  </p>
                </li>
              </ul>
            </div>
            {/* Accessories... */}
            <div>
              <h3 className="text-[20px] mb-[20px] leading-[1.20] font-semibold">
                Accessories and functionalities:
              </h3>
              <ul className="flex flex-col gap-[16px]">
                {[
                  ...(car.accessories || []),
                  ...(car.functionalities || []),
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg width="16" height="16" className="mr-[8px]">
                      <use href="/icons.svg#icon-check" />
                    </svg>
                    <p className="leading-[1.25]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarDetails;
