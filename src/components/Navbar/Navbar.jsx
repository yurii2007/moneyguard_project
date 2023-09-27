import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.navigationContainer}>
      <NavLink className={css.link} to="home">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="statistics">
          Statistics
        </NavLink>
      )}
    </nav>
  );
};