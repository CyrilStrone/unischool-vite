import { NavLink } from "react-router-dom";
import "../styles/GamesList.css"
import ArithmeticСall from '../../../common/assets/games/ArithmeticСall.png'
export const GamesList = () => {

    return (
        <div className="GamesList">
            <div className="GamesList__Title">
                Все мини-игры
            </div>
            <div className="GamesList__Bar">
                <div className="GamesList__Bar__Item">
                    <div className="GamesList__Bar__Item__Header">
                        <img className="GamesList__Bar__Item__Header__Image" src={ArithmeticСall} alt="Arithmetic Сall" />
                        <div className="GamesList__Bar__Item__Header__Title">
                            Арифметический вызов
                        </div>
                    </div>
                    <NavLink className="GamesList__Bar__Item__Link" to={"/Games/Bar/:1"}>Играть</NavLink>
                </div>
                <div className="GamesList__Bar__Item">
                    <div className="GamesList__Bar__Item__Header">
                        <img className="GamesList__Bar__Item__Header__Image" src={ArithmeticСall} alt="Arithmetic Сall" />
                        <div className="GamesList__Bar__Item__Header__Title">
                            Поиск карты
                        </div>
                    </div>
                    <NavLink className="GamesList__Bar__Item__Link" to={"/Games/Bar/:2"}>Играть</NavLink>
                </div>
                <div className="GamesList__Bar__Item">
                    <div className="GamesList__Bar__Item__Header">
                        <img className="GamesList__Bar__Item__Header__Image" src={ArithmeticСall} alt="Arithmetic Сall" />
                        <div className="GamesList__Bar__Item__Header__Title">
                            Вспомнить все
                        </div>
                    </div>
                    <NavLink className="GamesList__Bar__Item__Link" to={"/Games/Bar/:3"}>Играть</NavLink>
                </div>
            </div>
        </div>
    );
};
