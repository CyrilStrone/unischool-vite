import "../styles/GamesList.css"
import { NavLink } from "react-router-dom";
import { apiImage } from "../../../common/axiosInstance";

interface IGameList {
    value: any
}

export const GamesList = (params: IGameList) => {
    return (
        params.value && <div className="GamesList">
            <div className="GamesList__Title">
                Все мини-игры
            </div>
            <div className="GamesList__Bar">
                {params.value && params.value.games && params.value.games.length !== 0 && params.value.games.map((e: any, id: number) =>
                    <div key={id} className="GamesList__Bar__Item">
                        <img className="GamesList__Bar__Item__Image" src={apiImage + e.image} alt={e.title} />
                        <div className="GamesList__Bar__Item__Block">
                            <div className="GamesList__Bar__Item__Block__Title">
                                {e.title}
                            </div>
                            <div className="GamesList__Bar__Item__Block__Description">
                                {e.description}
                            </div>
                            <div className="GamesList__Bar__Item__Block__Footer">
                                <NavLink className="GamesList__Bar__Item__Block__Footer__Link" to={`/Games/Bar/:${e.id}`}>Играть</NavLink>
                                {params.value.best.game[id] && <div className="GamesList__Bar__Item__Block__Footer__Top" >Вы лучше: {params.value.best.game[id].result.toFixed(0)}% игроков</div>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
