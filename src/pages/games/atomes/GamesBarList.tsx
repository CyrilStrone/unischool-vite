import "../styles/GamesBarList.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiImage } from "../../../common/axiosInstance";

interface IGamesBarList {
    value?: any
    placeUser?:any
}
//Список всех игр
export const GamesBarList = (params: IGamesBarList) => {
    const navigate = useNavigate();

    return (
        params.value && <div className="GamesBarList GamesBar__Block">
            <div className="GamesBar__Title">
                Список игроков
            </div>
            <div className="GamesBarList__General">
                <div className="GamesBarList__General__Header">
                    <div>
                        Место
                    </div>
                    <div>
                    </div>
                    <div>
                        Игрок
                    </div>
                    <div>
                        Игра
                    </div>
                    <div>
                        Очки
                    </div>
                </div>
                <div className="GamesBarList__General__Footer" >
                    {params.value && params.value.rating && params.value.rating.map((e: any, id: number) =>
                        <div key={id} className={"GamesBarList__General__Footer__item"}
                        >
                            <div>
                                {id + 1}
                            </div>
                            <div>
                                <img className="GamesBarList__General__Footer__item__image" src={apiImage + e.user.avatar} alt="" />
                            </div>
                            <div style={{ cursor: "pointer" }} onClick={() => { navigate(`/AnotherProfile/:${e.user.id}`) }}>
                                {e.user.login}
                            </div>
                            <div>
                                {params.value.game.title}
                            </div>
                            <div>
                                {e.bestScore}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {params.placeUser && params.placeUser !== 0 &&
                <div className="GamesBarList__General__User" style={params.value.rating.length < 6 ? { marginRight: "40px" } : {}}>
                    <div>
                        {params.placeUser}
                    </div>
                    <div>
                        <img className="GamesBarList__General__Footer__item__image" src={apiImage + params.value.myScore.user.avatar} alt="" />
                    </div>
                    <div onClick={() => { navigate(`/Profile`) }}>
                        {params.value.myScore.user.login}
                    </div>
                    <div>
                        {params.value.game.title}
                    </div>
                    <div>
                        {params.value.myScore.bestScore}
                    </div>
                </div>
            }

        </div>
    );
};
