import Links from "./Links";
import NavLink from "./NavLink";

export default function NavItems() {
  const items = Links();

  return items.map((link, index) => {
    return (
      <NavLink navLink={link.navLink} navText={link.navText} key={index} />
    );
  });
}
