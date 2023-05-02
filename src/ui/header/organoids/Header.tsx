import { useStore } from "effector-react";
import { useLocation } from "react-router-dom";
import { $searchValue, setSearchValue } from "../../../pages/blog/logics/SearchValue";
import { HeaderLogo } from "../molecules/HeaderLogo";
import { HeaderNav } from "../molecules/HeaderNav";
import { HeaderUser } from "../molecules/HeaderUser";
import Search from '../../../common/assets/header/search.svg'
import "../styles/Header.css"
export const Header = () => {
    const location = useLocation();
    const searchValue = useStore($searchValue);
    return (
        <div className="Header">
            <div className="Header__Actual">
                <HeaderLogo />
                <HeaderNav />
                <HeaderUser />
            </div>
            {location.pathname == "/Blog" && 
                <div className="Header__Search">
                    <img src={Search} alt="Search" />
                    <input className="Header__Search__Input" placeholder={"Поиск"} type="text" value={searchValue} onChange={(event) => { setSearchValue(event.target.value) }} />
                </div>}
        </div>
    );
};
