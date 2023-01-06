import {
  Event,
  NavbarWrapper,
  NavContainer,
  NavLinks,
  NavTitle,
} from "./Navbar-styles";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="container">
        <NavContainer>
          <NavTitle>
            AFRI<Event>CANO</Event>
          </NavTitle>
          <NavLinks>
            <NavItems />
          </NavLinks>
        </NavContainer>
      </div>
    </NavbarWrapper>
  );
}
