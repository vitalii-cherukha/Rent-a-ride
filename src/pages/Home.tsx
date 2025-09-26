import { Link } from "react-router";
import Container from "../components/layout/Container";

const Home = () => {
  return (
    <div
      className="
        bg-cover 
        bg-center
        bg-[url('/src/assets/images/hero-img.jpg')]"
    >
      <Container>
        <div className="flex flex-col items-center  pt-[436px] pb-[60px] text-white">
          <h1 className="mb-[16px] text-[60px]">
            Find your perfect rental car
          </h1>
          <p className="mb-[40px] text-[24px]">
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link
            className="
    bg-primary                 
    hover:bg-primary-dark      
    rounded-[12px] 
    py-[12px]                     
    px-[20px]  
    min-w-[279px] 
    text-center                 
    transition ease-linear duration-250
"
            to={"/catalog"}
          >
            View Catalog
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
