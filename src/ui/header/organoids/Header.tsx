import { useStore } from "effector-react";
import { useLocation } from "react-router-dom";
import { $searchValue, setSearchValue } from "../../../pages/blog/logics/SearchValue";
import { HeaderLogo } from "../molecules/HeaderLogo";
import { HeaderNav } from "../molecules/HeaderNav";
import { HeaderUser } from "../molecules/HeaderUser";
import Search from '../../../common/assets/header/search.svg'
import "../styles/Header.css"
import { $level } from "../../../common/UserHooks";
import { useEffect } from "react";
export const Header = () => {
    const location = useLocation();
    const searchValue = useStore($searchValue);
    const level = useStore($level);
    useEffect(() => {
        console.log((level.index/level.end) * 183)
    }, [level])
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
                </div>
            }
            {(location.pathname == "/Games/Bar/ArithmeticScale" || location.pathname == "/Games/Bar/CardMemory" || location.pathname == "/Games/Bar/ArithmeticCall") &&
                <div className="Header__Score">
                    <div className="Header__Score__LineBlock">
                        <div className="Header__Score__LineBlock__Index">
                            Уровень: {level.index}
                        </div>
                        <div className="Header__Score__LineBlock__Line">
                        <div className="Header__Score__LineBlock__Line__Green" style={{width:`${(level.index/level.end) * 183}px`,height:"100%"}}></div>
                        </div>
                        <div className="Header__Score__LineBlock__End">
                        Уровень: {level.end}
                        </div>
                    </div>
                    <div className="Header__Score__Number">
                        Очков заработано: {level.score}
                    </div>
                </div>
            }
        </div>
    );
};
