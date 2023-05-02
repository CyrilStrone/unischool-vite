import { NavLink } from "react-router-dom";
import { useStore } from "effector-react";
import UserIcon from '../../../common/assets/header/user.svg'
import "../styles/HeaderUser.css"
import { useEffect, useState } from "react";
import { InHeaderUser } from "../logics/InHeaderUser";
import { apiImage } from "../../../common/axiosInstance";
import { $accessToken } from "../../../common/accessToken";
export const HeaderUser = () => {
    const accessToken = useStore($accessToken);
    const [avatar, setAvatar] = useState<string>()
    const requestInHeaderUser = async () => {
        setAvatar(await InHeaderUser())
    }
    useEffect(() => {
        if (accessToken) {
            requestInHeaderUser()
        }
    }, [accessToken])

    return (
        <div className="HeaderUser">
            {accessToken ?
                <>
                    <NavLink className="HeaderUser__Button" to="/ArticleWriting">Написать статью</NavLink>
                    <NavLink className="HeaderUser__Icon" to="/Profile">
                        <img src={avatar ? apiImage + avatar : UserIcon} alt="UserIcon" />
                    </NavLink>
                </> :
                <>
                    <NavLink className="HeaderUser__Button" to="/Authorization">Вход</NavLink>
                    <NavLink className="HeaderUser__Button" to="/Registration">Регистрация</NavLink>
                </>}
        </div>
    );
};
