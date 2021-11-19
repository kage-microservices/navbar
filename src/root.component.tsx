import { Button } from "@kage/ui-kit";
import { StyledNavbar } from "./styles/Navbar.styles";

export default function Root(props) {
  return (
    <StyledNavbar>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </nav>
      <Button>Login</Button>
    </StyledNavbar>
  );
}
