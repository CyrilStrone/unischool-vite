import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Registration.css"
import Man from "../../../common/assets/registration/Man.png"
import { useEffect, useState } from "react";
import { IInRegistration, InRegistration } from "../logics/InRegistration";
import { useStore } from "effector-react";
import { $userAuthorization } from "../../../common/UserHooks";
import { accessTokenName } from "../../../common/axiosInstance";
export const Registration = () => {
    const [value, setValue] = useState<IInRegistration>({ email: "", password: "", firstName: "", lastName: "", login: "", role: "USER" })
    const requestRegistration = async () => {
        await InRegistration(value);
    }
    let handleClick = () => {
        if (value.email && value.password && value.firstName && value.login && value.lastName) {
            requestRegistration()
        } else {
        }
    };
    const navigate = useNavigate();
    const userAuthorization = useStore($userAuthorization);
    useEffect(() => {
        if (localStorage.getItem(accessTokenName)?.length) {
            navigate("/Profile")
        }
    }, [userAuthorization])
    return (
        <div className="Registration">
            <div className="Registration__Image">
                <img src={Man} alt="" />
            </div>
            <div className="Registration__Bar">
                <div className="Registration__Bar__General__Title" >
                    Регистрация
                </div>
                <div className="Registration__Bar__Mail Registration__Bar__Block">
                    <div className="Registration__Bar__Mail__Title Registration__Bar__Title">
                        EMail
                    </div>
                    <input type="email" placeholder="unischool@gmail.com" value={value.email} onChange={(event: any) => { setValue({ ...value, "email": event.target.value }) }} />
                </div>
                <div className="Registration__Bar__Multi Registration__Bar__Block">
                    <div className="Registration__Bar__Multi__Name Registration__Bar__Block">
                        <div className="Registration__Bar__Multi__Name__Title Registration__Bar__Title">
                            Имя
                        </div>
                        <input type="text" placeholder="" value={value.firstName} onChange={(event: any) => { setValue({ ...value, "firstName": event.target.value }) }} />
                        <div className="Registration__Bar__Multi__Name__Title Registration__Bar__Title">
                            Фамилия
                        </div>
                        <input type="text" placeholder="" value={value.lastName} onChange={(event: any) => { setValue({ ...value, "lastName": event.target.value }) }} />
                    </div>
                    <div className="Registration__Bar__Multi__Login Registration__Bar__Block">
                        <div className="Registration__Bar__Multi__Login__Title Registration__Bar__Title">
                            Логин
                        </div>
                        <input type="text" placeholder="" value={value.login} onChange={(event: any) => { setValue({ ...value, "login": event.target.value }) }} />
                    </div>
                </div>
                <div className="Registration__Bar__Password Registration__Bar__Block">
                    <div className="Registration__Bar__Password__Title Registration__Bar__Title">
                        Пароль
                    </div>
                    <input type="password" placeholder="" value={value.password} onChange={(event: any) => { setValue({ ...value, "password": event.target.value }) }} />
                </div>
                <div className="Registration__Bar__Footer">
                    <div className="Registration__Bar__Footer__Button" onClick={handleClick}>
                        Создать аккаунт
                    </div>
                    <div className="Registration__Bar__Footer__Authorization">
                        <div className="Registration__Bar__Footer__Authorization__Black">
                            Есть аккаунт?
                        </div>
                        <NavLink to={"/Authorization"} className="Registration__Bar__Footer__Authorization__Blue">
                            Войти
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
