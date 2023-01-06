import styled from "@emotion/styled";
import theme from "../../config.jsx";

export const NavbarWrapper = styled(`section`)`
  position: fixed;
  width: 100%;
  padding: 1rem;
  background-color: ${theme.secondary};
  z-index: 1000;
`;

export const NavContainer = styled(`div`)`
  display: flex;
  justify-content: space-between;
  color: ${theme.white};
  align-items: center;
`;

export const NavTitle = styled(`h1`)``;

export const Event = styled(`span`)`
  color: ${theme.primary};
`;

export const Link = styled(`a`)`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${theme.primary};
    transition: 0.3s;
  }
`;

export const NavLinks = styled(`div`)`
  display: flex;
  gap: 2rem;
`;
