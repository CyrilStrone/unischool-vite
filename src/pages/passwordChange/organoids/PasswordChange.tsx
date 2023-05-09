import { useState } from "react";
import '../styles/PasswordChange.css'
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { IInPasswordChange, InPasswordChange } from "../logics/InPasswordChange";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";
import { BackButton } from "../../../ui/backbutton/organoids/BackButton";
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity";

export const PasswordChange = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<IInPasswordChange>({ currentPassword: "", newPassword: "", newPasswordRepeat: "", navigate: navigate })
    const handleClick = async () => {
        try {
            value.newPassword && value.newPassword === value.newPasswordRepeat && await InPasswordChange(value)
        } catch (error) {
            setCustomValidityShow("Не верный старый пароль")
        }
    };
    return (
        <>
            <form onSubmit={e => { e.preventDefault(); handleClick(); }} className="PasswordChange">
                <BackButton link={"/ProfileСhange"} />
                <div className="PasswordChange__Title">
                    Изменить пароль
                </div>
                <div className="PasswordChange__original">
                    <div className="PasswordChange__original__Title">
                        Напишите старый пароль
                    </div>
                    <input required type="password" minLength={8} maxLength={20} className="PasswordChange__Input" placeholder="" value={value.currentPassword} onChange={(event: any) => { setValue({ ...value, "currentPassword": event.target.value }) }} />
                </div>
                <div className="PasswordChange__original">
                    <div className="PasswordChange__original__Title">
                        Придумайте новый пароль
                    </div>
                    <input required type="password" minLength={8} maxLength={20} className="PasswordChange__Input" placeholder="" value={value.newPassword} onChange={(event: any) => { setValue({ ...value, "newPassword": event.target.value }) }} />
                </div>
                <div className="PasswordChange__repeat">
                    <div className="PasswordChange__repeat__Title">
                        Повторите новый пароль
                    </div>
                    <input required type="password" minLength={8} maxLength={20} className="PasswordChange__Input" placeholder="" value={value.newPasswordRepeat} onChange={(event: any) => { setValue({ ...value, "newPasswordRepeat": event.target.value }) }} />
                </div>
                <input type="submit" value="Изменить пароль" className="PasswordChange__Button" />
                    
            </form>
            <CircleBackground />
        </>
    );
};
