import { Link } from "react-router";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to={"/"}>
            <svg width="104" height="16">
              <use href="/src/assets/images/icons.svg#icon-logo" />
            </svg>
          </Link>
          <ul>
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
  );
};

export default Header;
