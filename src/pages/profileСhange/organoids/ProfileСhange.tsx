import '../styles/ProfileСhange.css'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { InProfile } from "../../profile/logics/InProfile";
import { InProfileСhangeAvatar } from '../logics/InProfileСhangeAvatar';
import { InProfileСhange } from '../logics/InProfileСhange';
import { BackButton } from '../../../ui/backbutton/organoids/BackButton';
import { setCustomValidityShow } from '../../../ui/customValidity/organoids/CustomValidity';
export const ProfileСhange = () => {
    const [value, setValue] = useState<any>()
    const [valuecheck, setValuecheck] = useState<any>()
    const requestInProfile = async () => {
        setValue(await InProfile())
        setValuecheck(await InProfile())
    }
    const requestInProfileСhange = async () => {
        try {
            if (valuecheck.firstName !== value.firstName || valuecheck.lastName !== value.lastName || valuecheck.about !== value.about){
                await InProfileСhange({ firstName: value.firstName, lastName: value.lastName, about: value.about })
            }else{
                setCustomValidityShow("Нет изменений")
            }
        } catch (error) {
            setCustomValidityShow("Информация о пользователе не была изменена")
        }
    }
    const requestInProfileChangeAvatar = async () => {
        try {
            if (valuecheck.avatar !== value.avatar)
                await InProfileСhangeAvatar({ file: value.avatar });
        } catch (error) {
            setCustomValidityShow("Аватар не был изменен")
        }
    }
    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setValue({
                ...value,
                avatar: event.target.files[0],
            });
        }
    };
    useEffect(() => {
        requestInProfile()
    }, [])
    return (
        <>{value &&
            <form onSubmit={e => { e.preventDefault(); requestInProfileСhange(); requestInProfileChangeAvatar(); }} className="ProfileСhange">
                <BackButton link={"/Profile"} />
                <div className="ProfileСhange__Title">
                    Редактировать профиль
                </div>
                <div className="ProfileСhange__image">
                    <label htmlFor="file-input" style={{ backgroundImage: `url(${typeof value.avatar == "string" ? value.avatar : URL.createObjectURL(value.avatar)}` }} className="ProfileСhange__image__image" />
                    <input
                        id="file-input"
                        type="file"
                        onChange={handleAvatarChange}
                        accept="image/*"
                    />
                    <label htmlFor="file-input" className="ProfileСhange__image__Button">
                        Изменить фотографию профиля
                    </label>
                </div>
                <div className="ProfileСhange__name">
                    <div className="ProfileСhange__name__Title">
                        Имя пользователя
                    </div>
                    <input type="text" required minLength={1} maxLength={40} className="ProfileСhange__Input" placeholder="" onChange={(event: any) => { setValue({ ...value, "firstName": event.target.value }) }} value={value.firstName} />
                </div>
                <div className="ProfileСhange__name">
                    <div className="ProfileСhange__name__Title">
                        Фамилия пользователя
                    </div>
                    <input type="text" required minLength={1} maxLength={40} className="ProfileСhange__Input" placeholder="" onChange={(event: any) => { setValue({ ...value, "lastName": event.target.value }) }} value={value.lastName} />
                </div>
                <div className="ProfileСhange__about">
                    <div className="ProfileСhange__about__Title">
                        О себе
                    </div>
                    <input type="text" required minLength={1} maxLength={40} className="ProfileСhange__Input" placeholder="" onChange={(event: any) => { setValue({ ...value, "about": event.target.value }) }} value={value.about} />
                </div>
                <div className="ProfileСhange__Buttons">
                    <input type="submit" value="Сохранить" className="ProfileСhange__Buttons__Save ProfileСhange__Buttons__Item" />
                    <div onClick={requestInProfile} className="ProfileСhange__Buttons__Delete ProfileСhange__Buttons__Item">
                        Отменить
                    </div>
                </div>
                <NavLink to={"/PasswordChange"} className="ProfileСhange__password">
                    Изменить пароль
                </NavLink>
            </form>
        }
            <CircleBackground />
        </>
    );
};
