import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import { paths } from "../../config/routes";
import "./Header.scss";
function Header() {
  const location = useLocation();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav className="Header">
      <div>
        <Logo />
      </div>

      <div className="rectangle"></div>
      <ul className="nav">
        <Link className={location.pathname === "/" ? "link nav__item is-active" : "link nav__item"} to={paths.home}>
          <span> 00</span> Home
        </Link>
        <Link
          className={location.pathname === "/destinations" ? "link nav__item is-active" : "link nav__item"}
          to={paths.destinations}
        >
          <span> 01</span> Destination
        </Link>
        <Link className={location.pathname === "/crew" ? "link nav__item is-active" : "link nav__item"} to={paths.crew}>
          <span> 02</span> Crew
        </Link>
        <Link
          className={location.pathname === "/technology" ? "link nav__item is-active" : "link nav__item"}
          to={paths.technology}
        >
          <span> 03</span> Technology
        </Link>
        <Link className={location.pathname === "/tour" ? "link nav__item is-active" : "link nav__item"} to={paths.tour}>
          <span> 04</span> Tour
        </Link>
        {token ? (
          <div onClick={logout} className="nav__item">
            Logout
          </div>
        ) : (
          <Link
            to={paths.auth}
            className={location.pathname === "/auth" ? "link nav__item is-active" : "link nav__item"}
          >
            Auth
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Header;
