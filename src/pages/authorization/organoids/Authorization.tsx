import "../styles/Authorization.css"
import { NavLink, useNavigate } from "react-router-dom";
import { IInAuthorization, InAuthorization } from "../logics/InAuthorization";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { useState } from "react";
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity";

export const Authorization = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<IInAuthorization>({ email: "", password: "", navigate: navigate })
    const handleClick = async () => {
        try {
            await InAuthorization(value);
        } catch (error) {
            setCustomValidityShow("Не правильный логин или пароль")
        }
    };

    return (
        <div className="Authorization">
            <div className="Authorization__Title">
                Вход
            </div>
            <form onSubmit={e => { e.preventDefault(); handleClick(); }} className="Authorization__Bar">
                <div className="Authorization__Bar__Login Authorization__Bar__Block">
                    <div className="Authorization__Bar__Login__Title Authorization__Bar__Title">
                        Логин/ EMail
                    </div>
                    <input required type="email" placeholder="unischool@gmail.com" value={value.email} onChange={(event: any) => { setValue({ ...value, "email": event.target.value }) }} />
                </div>
                <div className="Authorization__Bar__Password Authorization__Bar__Block">
                    <div className="Authorization__Bar__Password__Title Authorization__Bar__Title">
                        Пароль
                    </div>
                    <input required type="password" placeholder="Пароль" value={value.password} onChange={(event: any) => { setValue({ ...value, "password": event.target.value }) }} />
                </div>
                <input type="submit" className="Authorization__Bar__Button" value="Войти" />
                <NavLink to={"/Forgot"} className="Authorization__Bar__Forgot">
                    Забыли пароль?
                </NavLink>
                <div className="Authorization__Bar__OrBlock">
                    <div className="Authorization__Bar__OrBlock__Line">
                    </div>
                    <div className="Authorization__Bar__OrBlock__Title">
                        или
                    </div>
                    <div className="Authorization__Bar__OrBlock__Line">
                    </div>
                </div>
                <NavLink to={"/Registration"} className="Authorization__Bar__Registration">
                    Создать аккаунт
                </NavLink>
            </form>
            <CircleBackground />
        </div>
    );
};
