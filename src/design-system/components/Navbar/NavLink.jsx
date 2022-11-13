import { Link } from "./Navbar-styles";

export default function NavLink({ navLink, navText }) {
  return <Link src={navLink}>{navText}</Link>;
}
