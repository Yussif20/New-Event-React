import {
  Event,
  NavbarWrapper,
  NavContainer,
  NavLinks,
  NavTitle,
} from "./Navbar-styles";
import Links from "./Links";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <div className="container">
        <NavContainer>
          <NavTitle>
            New<Event>Event</Event>
          </NavTitle>
          <NavLinks>
            {Links.map((link, index) => {
              return (
                <NavLink
                  navLink={link.navLink}
                  navText={link.navText}
                  key={index}
                />
              );
            })}
          </NavLinks>
        </NavContainer>
      </div>
    </NavbarWrapper>
  );
}
