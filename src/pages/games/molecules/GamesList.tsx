import { NavLink } from "react-router-dom";
import "../styles/GamesList.css"

import ArithmeticCall from '../../../common/assets/games/ArithmeticCall.png'
import CardMemory from '../../../common/assets/games/CardMemory.png'
import ArithmeticScale from '../../../common/assets/games/ArithmeticScale.png'

export const GamesList = () => {

    return (
        <div className="GamesList">
            <div className="GamesList__Title">
                Все мини-игры
            </div>
            <div className="GamesList__Bar">
                <div className="GamesList__Bar__Item">
                    <img className="GamesList__Bar__Item__Image" src={ArithmeticCall} alt="Arithmetic Сall" />
                    <div className="GamesList__Bar__Item__Block">
                        <div className="GamesList__Bar__Item__Block__Title">
                            Арифметический вызов
                        </div>
                        <div className="GamesList__Bar__Item__Block__Description">
                            Упражнение нацелено на развитие математических способностей и скорости принятия решения. Посчитайте в уме выражение, представленное в центре экрана и затем нажми
                            на верную кнопку с ответом внизу экрана
                        </div>
                        <div className="GamesList__Bar__Item__Block__Footer">
                            <NavLink className="GamesList__Bar__Item__Block__Footer__Link" to={"/Games/Bar/:1"}>Играть</NavLink>
                            <div className="GamesList__Bar__Item__Block__Footer__Top" >Вы лучше: 54% игроков</div>
                        </div>
                    </div>
                </div>
                <div className="GamesList__Bar__Item">
                    <img className="GamesList__Bar__Item__Image" src={ArithmeticScale} alt="Arithmetic Scale" />
                    <div className="GamesList__Bar__Item__Block">
                        <div className="GamesList__Bar__Item__Block__Title">
                            Блиц-клик
                        </div>
                        <div className="GamesList__Bar__Item__Block__Description">
                            Проверка скорости реакции и внимательности. На экране появляются числа. Необходимо за ограниченное время выбрать верное число. Если в верхней части экрана показана кнопка: “Верх” - выбираем наибольшее число
                            “Низ” - наименьшее число
                        </div>
                        <div className="GamesList__Bar__Item__Block__Footer">
                            <NavLink className="GamesList__Bar__Item__Block__Footer__Link" to={"/Games/Bar/:2"}>Играть</NavLink>
                            <div className="GamesList__Bar__Item__Block__Footer__Top" >Вы лучше: 54% игроков</div>
                        </div>
                    </div>
                </div>
                <div className="GamesList__Bar__Item">
                    <img className="GamesList__Bar__Item__Image" src={CardMemory} alt="Card Memory" />
                    <div className="GamesList__Bar__Item__Block">
                        <div className="GamesList__Bar__Item__Block__Title">
                            Точные пары
                        </div>
                        <div className="GamesList__Bar__Item__Block__Description">
                            Проверка на память и внимательность. Необходимо выбирать квадратики, в которых случайным образом находятся элементы.
                            Необходимо за отведённое время найти все элементы, чтобы общий квадрат со всеми элементами заполнился
                        </div>
                        <div className="GamesList__Bar__Item__Block__Footer">
                            <NavLink className="GamesList__Bar__Item__Block__Footer__Link" to={"/Games/Bar/:3"}>Играть</NavLink>
                            <div className="GamesList__Bar__Item__Block__Footer__Top" >Вы лучше: 54% игроков</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
