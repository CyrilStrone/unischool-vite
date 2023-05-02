import "../styles/Authorization.css"
import { NavLink, useNavigate } from "react-router-dom";
import { IInAuthorization, InAuthorization } from "../logics/InAuthorization";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { useState } from "react";

export const Authorization = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<IInAuthorization>({ email: "", password: "",navigate:navigate })
    const requestLogin = async () => {
        await InAuthorization(value);
    }
    let handleClick = () => {
        if (value.email && value.password) {
            requestLogin()
        } else {
        }
    };

    return (
        <div className="Authorization">
            <div className="Authorization__Title">
                Вход
            </div>
            <div className="Authorization__Bar">
                <div className="Authorization__Bar__Login Authorization__Bar__Block">
                    <div className="Authorization__Bar__Login__Title Authorization__Bar__Title">
                        Логин/ EMail
                    </div>
                    <input type="email" placeholder="unischool@gmail.com" value={value.email} onChange={(event: any) => { setValue({ ...value, "email": event.target.value }) }} />
                </div>
                <div className="Authorization__Bar__Password Authorization__Bar__Block">
                    <div className="Authorization__Bar__Password__Title Authorization__Bar__Title">
                        Пароль
                    </div>
                    <input type="password" placeholder="Пароль" value={value.password} onChange={(event: any) => { setValue({ ...value, "password": event.target.value }) }} />
                </div>
                <div onClick={handleClick} className="Authorization__Bar__Button">
                    Войти
                </div>
                <NavLink to={"/Forgot"} className="Authorization__Bar__Forgot">
                    Забыли пароль?
                </NavLink>
            </div>
            <CircleBackground/>
        </div>
    );
};
