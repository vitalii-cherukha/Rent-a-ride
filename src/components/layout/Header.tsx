import { Link } from "react-router";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-background-light">
      <Container>
        <header>
          <nav className="flex justify-between py-[24px]  ">
            <Link to={"/"}>
              <svg width="104" height="16">
                <use href="/icons.svg#icon-logo" />
              </svg>
            </Link>
            <ul className="flex gap-[32px]">
              <li>
                <Link
                  className="text-primary-dark transition ease-linear duration-250"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary-dark transition ease-linear duration-250"
                  to={"/catalog"}
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default Header;
