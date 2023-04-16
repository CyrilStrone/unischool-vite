import { NavLink, useLocation } from "react-router-dom";
import "../styles/HeaderNav.css"
import Search from '../../../common/assets/header/search.svg'
import { $searchValue, setSearchValue } from "../../../pages/blog/logics/SearchValue";
import { useStore } from "effector-react";
export const HeaderNav = () => {
    const searchValue = useStore($searchValue);
    const location = useLocation();

    return (
        <>
            {location.pathname == "/Blog" ?
                <div className="HeaderNav__Search">
                    <img src={Search} alt="Search" />
                    <input className="HeaderNav__Search__Input" placeholder={"Поиск"} type="text" value={searchValue} onChange={(event) => { setSearchValue(event.target.value) }} />
                </div>
                :
                <div className="HeaderNav">
                    <NavLink to="/">Мини-игры</NavLink>
                    <NavLink to="/Blog">Блог</NavLink>
                </div>
            }
        </>
    );
};
