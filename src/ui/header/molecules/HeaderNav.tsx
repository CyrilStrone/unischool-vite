import { NavLink, useLocation } from "react-router-dom";
import "../styles/HeaderNav.css"
import { useStore } from "effector-react";
import { $accessToken } from "../../../common/accessToken";
export const HeaderNav = () => {
    const accessToken = useStore($accessToken);
    return (
        accessToken ?
                <div className="HeaderNav">
                    <NavLink to="/">Мини-игры</NavLink>
                    <NavLink to="/Blog">Блог</NavLink>
                </div>
            : null
    );
};
