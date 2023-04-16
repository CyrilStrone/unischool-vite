import { NavLink } from "react-router-dom";
import Logo from "../../../common/assets/Logo.png"
import "../styles/HeaderLogo.css"
export const HeaderLogo = () => {

    return (
        <NavLink to={'/Blog'} className="HeaderLogo">
            <img src={Logo} alt="Logo" />
            <div className="HeaderLogo__Title">
                UniSchool
            </div>
        </NavLink>
    );
};
