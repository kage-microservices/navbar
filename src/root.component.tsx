import { store } from "@kage/store";
import { Link } from "@reach/router";
import { Provider } from "react-redux";
import { AddNewProductButton } from "./components/AddNewProductButton/AddNewProductButton.component";
import { StyledNavbar } from "./styles/Navbar.styles";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
];

export default function Root(props) {
  return (
    <Provider store={store}>
      <StyledNavbar>
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.link}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <AddNewProductButton />
      </StyledNavbar>
    </Provider>
  );
}
