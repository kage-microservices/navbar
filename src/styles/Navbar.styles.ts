import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  border-bottom: 1px solid #dedede;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    li {
      padding: 0;
      margin: 0;
      a {
        display: block;
        text-decoration: none;
        color: inherit;
        padding: 0.5rem;
      }
    }
  }
`;
