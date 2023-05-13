import "../styles/GamesContinue.css"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiImage } from "../../../common/axiosInstance";

export interface IGamesContinue {
    value: any
}

export const GamesContinue = (params: IGamesContinue) => {
    const [lastVisitId, setLastVisitId] = useState<any>()
    const [value, setValue] = useState<any>()
    useEffect(() => {
        if (params.value && params.value.myScore && params.value.myScore && params.value.myScore[0]) {
            setLastVisitId(params.value.myScore[0].game.id)
        }
    }, [params.value])
    useEffect(() => {
        if (lastVisitId)
            params.value && params.value.games.map((e: any, id: any) => {
                if (e.id == lastVisitId) {
                    setValue(e)
                }
            })
    }, [lastVisitId])
    return (
        value && <div className="GamesContinue">
            <div className="GamesContinue__Title">Продолжить тренировку</div>
            <div className="GamesContinue__Block">
                <img className="GamesContinue__Block__Image" src={apiImage + value.image} alt={value.title} />
                <div className="GamesContinue__Block__Info">
                    <div className="GamesContinue__Block__Info__Title">
                        {value.title}
                    </div>
                    <div className="GamesContinue__Block__Info__Description">
                        {value.description}
                    </div>
                    <div className="GamesContinue__Block__Info__Footer">
                        <NavLink className="GamesContinue__Block__Info__Footer__Link" to={`/Games/Bar/${value.name}`}>Играть</NavLink>
                        {params.value.best && params.value.best.map((a: any) =>
                            a.game_id == value.id && <div className="GamesContinue__Block__Info__Footer__Top" >Вы лучше: {a.best == 100 ? 0 : a.best.toFixed(0)}% игроков</div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
