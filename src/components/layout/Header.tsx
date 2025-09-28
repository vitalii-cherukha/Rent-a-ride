import { Link, useLocation } from "react-router";
import Container from "./Container";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isCatalog = location.pathname === "/catalog";

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
                  className={`hover:text-primary-dark transition ease-linear duration-250 ${
                    isHome ? "text-primary" : "text-dark-bg hover:text-primary"
                  }`}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`hover:text-primary-dark transition ease-linear duration-250 ${
                    isCatalog
                      ? "text-primary"
                      : "text-dark-bg hover:text-primary"
                  }`}
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
