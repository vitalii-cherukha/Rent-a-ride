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
                <use href="/src/assets/images/icons.svg#icon-logo" />
              </svg>
            </Link>
            <ul className="flex gap-[32px]">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/catalog"}>Catalog</Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default Header;
