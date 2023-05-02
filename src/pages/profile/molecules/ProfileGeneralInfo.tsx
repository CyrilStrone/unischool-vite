import { NavLink } from "react-router-dom";
import { UserLogout } from "../../../common/accessToken";
import "../styles/ProfileGeneralInfo.css"
interface IProfileGeneralInfo {
    image: string,
    login: string,
    firstName: string,
    lastName: string,
    dateOfRegistration: string,
    about: string,
    id: number
}
export const ProfileGeneralInfo = (params: IProfileGeneralInfo) => {
    let date = new Date(params.dateOfRegistration);
    let formattedDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <div className="ProfileGeneralInfo">
            <img className="ProfileGeneralInfo__Image" src={params.image} alt="" />
            <div className="ProfileGeneralInfo__Block">
                <div className="ProfileGeneralInfo__Block__name">
                    {params.firstName + " " + params.lastName}
                </div>
                <div className="ProfileGeneralInfo__Block__login">
                    {params.login}
                </div>
                <div className="ProfileGeneralInfo__Block__dateOfRegistration">
                    {formattedDate}
                </div>
                <div className="ProfileGeneralInfo__Block__about">
                    {params.about}
                </div>
            </div>
            <div className="ProfileGeneralInfo__Buttons">
                <NavLink to={"/ProfileСhange"} className="ProfileGeneralInfo__Button">
                    Редактировать профиль
                </NavLink>
                <div onClick={UserLogout} className="ProfileGeneralInfo__Logout">
                    Выход
                </div>
            </div>
        </div>
    );
};
