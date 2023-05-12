import "../styles/GamesBarInfo.css"
import { NavLink, useNavigate } from "react-router-dom";
import { BackButton } from "../../../ui/backbutton/organoids/BackButton";
import { apiImage } from "../../../common/axiosInstance";

interface IGamesBarInfo {
    id: number
    value: any
}

export const GamesBarInfo = (params: IGamesBarInfo) => {
    const navigate = useNavigate();
    return (
        params.value && <div className=" GamesBarInfo__Block">
            <BackButton link={"/Games"} />
            <div className="GamesBarInfo__Title GamesBar__Title">
                Продолжить тренировку
            </div>
            <div className="GamesBarInfo__ContinueAndList">
                <div className="GamesBarInfo__ContinueAndList__Game">
                    <div className="GamesBarInfo__ContinueAndList__Game__Header">
                        <img className="GamesBarInfo__ContinueAndList__Game__Header__Image" src={apiImage + params.value.game.image} alt="Arithmetic Сall" />
                        <div className="GamesBarInfo__ContinueAndList__Game__Header__Title">
                            {params.value.game.title}
                        </div>
                    </div>
                    <div className="GamesBarInfo__ContinueAndList__Game__Description">
                        {params.value.game.description}
                    </div>
                    <NavLink className="GamesBarInfo__ContinueAndList__Game__Link" to={`/Games/Bar/${params.value.game.name}`}> Начать тренировку</NavLink>
                </div>
                <div className="GamesBarInfo__ContinueAndList__Top">
                    <div className="GamesBar__Title GamesBarInfo__Title GamesBarInfo__ContinueAndList__Top__Title">
                        Топ игроков:
                    </div>
                    <div className="GamesBarInfo__ContinueAndList__Top__List">
                        {params.value.rating && params.value.rating.map((e: any, id: number) =>
                            id < 3 &&
                            <div key={id} className="GamesBarInfo__ContinueAndList__Top__List__Item">
                                <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Id">
                                    {id + 1}
                                </div>
                                <img className="GamesBarInfo__ContinueAndList__Top__List__Item__Image" src={apiImage + e.user.avatar} alt="" />
                                <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Info">
                                    <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Info__Name" style={{ cursor: "pointer" }} onClick={() => { navigate(`/AnotherProfile/:${e.user.id}`) }}>
                                        {e.user.login}
                                    </div>
                                    <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Info__Total">
                                        {e.bestScore}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
