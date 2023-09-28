import { NavContainer } from "./Navbar.styled";
import { ReactComponent as HomeIcon } from "../../images/svg/homepage-icon.svg";
import { ReactComponent as StatisticIcon } from "../../images/svg/statisticpage-icon.svg";
import { ReactComponent as UsdIcon } from "../../images/svg/mobile-nav-usd.svg";
import { NavLink } from "react-router-dom";
//import css from "./Navbar.module.css";
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavContainer>
      <ul className="menu">
        <li >
          <NavLink className="navLink" to="home">
            <HomeIcon className="navBtn"/>
            <span className="navSign">Home</span>
          </NavLink>
        </li>
      
        <li >
          {isLoggedIn && (
            <NavLink className="navLink" to="statistics">
              <StatisticIcon className="navBtn"/>
              <span className="navSign">Statistics</span>
          
        </NavLink>
        )}
        </li>

        <li className="currency">
          <NavLink className="navLink" to="/currency" >
            <UsdIcon className="navBtn"/>
          </NavLink>
        </li>
      
      </ul>
    </NavContainer>
  );
};