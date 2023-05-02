import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Registration.css"
import Man from "../../../common/assets/registration/Man.png"
import { useState } from "react";
import { IInRegistration, InRegistration } from "../logics/InRegistration";
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity";
export const Registration = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState<IInRegistration>({ email: "", password: "", firstName: "", lastName: "", login: "", role: "USER", navigate: navigate });
    const handleClick = async () => {
        try {
            await InRegistration(value);
        } catch (error) {
            setCustomValidityShow("Ошибка создания аккаунта")
        }
    };

    return (
        <div className="Registration">
            <div className="Registration__Image">
                <img src={Man} alt="" />
            </div>
            <form onSubmit={e => { e.preventDefault(); handleClick(); }} className="Registration__Bar">
                <div className="Registration__Bar__General__Title" >
                    Регистрация
                </div>
                <div className="Registration__Bar__Mail Registration__Bar__Block">
                    <div className="Registration__Bar__Mail__Title Registration__Bar__Title">
                        EMail
                    </div>
                    <input required type="email" placeholder="unischool@gmail.com" value={value.email} onChange={(event: any) => { setValue({ ...value, "email": event.target.value }) }} />
                </div>
                <div className="Registration__Bar__Multi Registration__Bar__Block">
                    <div className="Registration__Bar__Multi__Name Registration__Bar__Block">
                        <div className="Registration__Bar__Multi__Name__Title Registration__Bar__Title">
                            Имя
                        </div>
                        <input required type="text" placeholder="" value={value.firstName} onChange={(event: any) => { setValue({ ...value, "firstName": event.target.value }) }} />
                        <div className="Registration__Bar__Multi__Name__Title Registration__Bar__Title">
                            Фамилия
                        </div>
                        <input required type="text" placeholder="" value={value.lastName} onChange={(event: any) => { setValue({ ...value, "lastName": event.target.value }) }} />
                    </div>
                    <div className="Registration__Bar__Multi__Login Registration__Bar__Block">
                        <div className="Registration__Bar__Multi__Login__Title Registration__Bar__Title">
                            Логин
                        </div>
                        <input required type="text" placeholder="" value={value.login} onChange={(event: any) => { setValue({ ...value, "login": event.target.value }) }} />
                    </div>
                </div>
                <div className="Registration__Bar__Password Registration__Bar__Block">
                    <div className="Registration__Bar__Password__Title Registration__Bar__Title">
                        Пароль
                    </div>
                    <input required type="password" placeholder="" value={value.password} onChange={(event: any) => { setValue({ ...value, "password": event.target.value }) }} />
                </div>
                <div className="Registration__Bar__Footer">
                    <input type="submit" className="Registration__Bar__Footer__Button" value="Создать аккаунт" />
                    <div className="Registration__Bar__Footer__Authorization">
                        <div className="Registration__Bar__Footer__Authorization__Black">
                            Есть аккаунт?
                        </div>
                        <NavLink to={"/Authorization"} className="Registration__Bar__Footer__Authorization__Blue">
                            Войти
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
};
