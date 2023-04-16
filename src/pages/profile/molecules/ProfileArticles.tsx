import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiImage } from "../../../common/axiosInstance";
import { $userAuthorization } from "../../../common/UserHooks";
import { InProfileArticles } from "../logics/InProfileArticles";
import "../styles/ProfileArticles.css"
interface IProfileArticles {
    id: number,
}
export const ProfileArticles = (params: IProfileArticles) => {
    const userAuthorization = useStore($userAuthorization);
    const [value, setValue] = useState<any>()
    const requestInProfile = async (id: number) => {
        setValue(await InProfileArticles({ id: id }))
    }
    useEffect(() => {
        if (userAuthorization && params.id) {
            requestInProfile(params.id)
        }
    }, [userAuthorization])
    return (
        <div className="ProfileArticles">
            <div className="ProfileArticles__Title">
                Статьи
            </div>
            {value && value.map((e: any, id: number) =>
                <div key={id} className="ProfileArticles__Item">
                    <img src={apiImage + e.background} className="ProfileArticles__Item__background" alt="" />
                    <div className="ProfileArticles__Item__Info">
                        <div className="ProfileArticles__Item__Info__title">
                            {e.title}
                        </div>
                        <div className="ProfileArticles__Item__Info__description">
                            {e.description}
                        </div>
                        <NavLink to={`/Article/:${e.id}`} className="ProfileArticles__Item__Info__id">
                            Читать
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};
