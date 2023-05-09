import { NavLink } from "react-router-dom";
import "../styles/BackButton.css"
import Arrow from '../../../common/assets/backbutton/Arrow.svg'

interface IBackButton {
    link: string
}

export const BackButton = (params: IBackButton) => {

    return (
        <NavLink to={params.link} className=" BackButton">
            <img src={Arrow} alt="Arrow" />
            Назад
        </NavLink>
    );
};
