import { HeaderLogo } from "../molecules/HeaderLogo";
import { HeaderNav } from "../molecules/HeaderNav";
import { HeaderUser } from "../molecules/HeaderUser";
import "../styles/Header.css"
export const Header = () => {


    return (
        <div className="Header">
            <div className="Header__Actual">
                <HeaderLogo />
                <HeaderNav />
                <HeaderUser />
            </div>
        </div>
    );
};
