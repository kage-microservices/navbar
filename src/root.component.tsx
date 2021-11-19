import { Button } from "@kage/ui-kit";
import { StyledNavbar } from "./styles/Navbar.styles";
import { Link } from "@reach/router";

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
      <Button>Login</Button>
    </StyledNavbar>
  );
}
