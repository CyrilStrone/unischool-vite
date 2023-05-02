import { useState } from "react";
import '../styles/PasswordChange.css'
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { IInPasswordChange, InPasswordChange } from "../logics/InPasswordChange";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";
const requestPasswordChange = async (value: any) => {
    await InPasswordChange(value)
}
export const PasswordChange = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<IInPasswordChange>({ currentPassword: "", newPassword: "", newPasswordRepeat: "", navigate: navigate })

    return (
        <>
            <div className="PasswordChange">
                <div className="PasswordChange__Title">
                    Изменить пароль
                </div>
                <div className="PasswordChange__original">
                    <div className="PasswordChange__original__Title">
                        Напишите старый пароль
                    </div>
                    <input type="password" className="PasswordChange__Input" placeholder="" value={value.currentPassword} onChange={(event: any) => { setValue({ ...value, "currentPassword": event.target.value }) }} />
                </div>
                <div className="PasswordChange__original">
                    <div className="PasswordChange__original__Title">
                        Придумайте новый пароль
                    </div>
                    <input type="password" className="PasswordChange__Input" placeholder="" value={value.newPassword} onChange={(event: any) => { setValue({ ...value, "newPassword": event.target.value }) }} />
                </div>
                <div className="PasswordChange__repeat">
                    <div className="PasswordChange__repeat__Title">
                        Повторите новый пароль
                    </div>
                    <input type="password" className="PasswordChange__Input" placeholder="" value={value.newPasswordRepeat} onChange={(event: any) => { setValue({ ...value, "newPasswordRepeat": event.target.value }) }} />
                </div>
                <div className="PasswordChange__Button" onClick={() => value.newPassword && value.newPassword === value.newPasswordRepeat && requestPasswordChange(value)}>
                    Изменить пароль
                </div>
            </div>
            <CircleBackground />
        </>
    );
};
