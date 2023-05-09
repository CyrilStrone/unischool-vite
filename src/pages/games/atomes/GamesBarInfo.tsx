import "../styles/GamesBarInfo.css"
import { NavLink } from "react-router-dom";
import ArithmeticСall from '../../../common/assets/games/ArithmeticСall.png'
import { BackButton } from "../../../ui/backbutton/organoids/BackButton";

interface IGamesBarInfo {
    id: number
    value: any
}

export const GamesBarInfo = (params: IGamesBarInfo) => {

    return (
        <div className=" GamesBarInfo__Block">
            <BackButton link={"/Games"} />
            <div className="GamesBarInfo__Title GamesBar__Title">
                Продолжить тренировку
            </div>
            <div className="GamesBarInfo__ContinueAndList">
                <div className="GamesBarInfo__ContinueAndList__Game">
                    <div className="GamesBarInfo__ContinueAndList__Game__Header">
                        <img className="GamesBarInfo__ContinueAndList__Game__Header__Image" src={params.id == 1 ? ArithmeticСall : params.id == 2 ? ArithmeticСall : ArithmeticСall} alt="Arithmetic Сall" />
                        <div className="GamesBarInfo__ContinueAndList__Game__Header__Title">
                            {params.id == 1 ? "Арифметический вызов" : params.id == 2 ? "Поиск карты" : "Вспомнить все"}
                        </div>
                    </div>
                    <div className="GamesBarInfo__ContinueAndList__Game__Description">
                        {params.id == 1 ?
                            "Упражнение нацелено на развитие математических способностей и скорости принятия решения. Посчитайте в уме выражение, представленное в центре экрана и затем нажмите на верную кнопку с ответом внизу экрана"
                            : params.id == 2 ?
                                "Упражнение нацелено на развитие математических способностей и скорости принятия решения. Посчитайте в уме выражение, представленное в центре экрана и затем нажмите на верную кнопку с ответом внизу экрана" :
                                "Упражнение нацелено на развитие математических способностей и скорости принятия решения. Посчитайте в уме выражение, представленное в центре экрана и затем нажмите на верную кнопку с ответом внизу экрана"}
                    </div>
                    <NavLink className="GamesBarInfo__ContinueAndList__Game__Link" to={params.id == 1 ? "/Games/Bar/ArithmeticСall" : params.id == 2 ? "/Games/Bar/CardSearch" : "/Games/Bar/CardMemory"}>Начать тренировку</NavLink>
                </div>
                <div className="GamesBarInfo__ContinueAndList__Top">
                    <div className="GamesBar__Title GamesBarInfo__Title GamesBarInfo__ContinueAndList__Top__Title">
                        Топ игроков:
                    </div>
                    <div className="GamesBarInfo__ContinueAndList__Top__List">
                        {params.value && params.value.other.map((e: any, id: number) =>
                            id < 3 &&
                            <div className="GamesBarInfo__ContinueAndList__Top__List__Item">
                                <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Id">
                                    {id + 1}
                                </div>
                                <img className="GamesBarInfo__ContinueAndList__Top__List__Item__Image" src={e.image} alt="" />
                                <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Info">
                                    <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Info__Name">
                                        {e.name}
                                    </div>
                                    <div className="GamesBarInfo__ContinueAndList__Top__List__Item__Info__Total">
                                        {e.total}
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
