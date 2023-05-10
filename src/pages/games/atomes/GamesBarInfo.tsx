import "../styles/GamesBarInfo.css"
import { NavLink } from "react-router-dom";
import ArithmeticCall from '../../../common/assets/games/ArithmeticCall.png'
import CardMemory from '../../../common/assets/games/CardMemory.png'
import ArithmeticScale from '../../../common/assets/games/ArithmeticScale.png'
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
                        <img className="GamesBarInfo__ContinueAndList__Game__Header__Image" src={params.id == 1 ? ArithmeticCall : params.id == 2 ? ArithmeticScale : CardMemory} alt="Arithmetic Сall" />
                        <div className="GamesBarInfo__ContinueAndList__Game__Header__Title">
                            {params.id == 1 ? `Арифметический вызов` : params.id == 2 ? "Блиц-клик" : "Точные пары"}
                        </div>
                    </div>
                    <div className="GamesBarInfo__ContinueAndList__Game__Description">
                        {params.id == 1 ?
                            "Упражнение нацелено на развитие математических способностей и скорости принятия решения. Посчитайте в уме выражение, представленное в центре экрана и затем нажмите на верную кнопку с ответом внизу экрана"
                            : params.id == 2 ?
                                "Проверка скорости реакции и внимательности. На экране появляются числа. Необходимо за ограниченное время выбрать верное число. Если в верхней части экрана показана кнопка: “Верх” - выбираем наибольшее число“Низ” - наименьшее число" :
                                "Проверка на память и внимательность. Необходимо выбирать квадратики, в которых случайным образом находятся элементы. Необходимо за отведённое время найти все элементы, чтобы общий квадрат со всеми элементами заполнился "}
                    </div>
                    <NavLink className="GamesBarInfo__ContinueAndList__Game__Link" to={params.id == 1 ? "/Games/Bar/ArithmeticCall" : params.id == 2 ? "/Games/Bar/ArithmeticScale" : "/Games/Bar/CardMemory"}>Начать тренировку</NavLink>
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
