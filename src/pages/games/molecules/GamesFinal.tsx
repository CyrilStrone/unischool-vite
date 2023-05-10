import { NavLink } from "react-router-dom";
import "../styles/GamesFinal.css"
import ArithmeticCall from '../../../common/assets/games/ArithmeticCall.png'
import CardMemory from '../../../common/assets/games/CardMemory.png'
import ArithmeticScale from '../../../common/assets/games/ArithmeticScale.png'
import { BackButton } from "../../../ui/backbutton/organoids/BackButton";

export interface IGamesFinal {
    id: number
    total: number
    time: any
}
export const GamesFinal = (params: IGamesFinal) => {
    return (
        <div className="GamesFinal__General">
            <BackButton link={"/Games"} />
            <div className="GamesFinal">
                <div className="GamesFinal__Header">
                    <img className="GamesFinal__Header__Image" src={params.id == 1 ? ArithmeticCall : params.id == 2 ? ArithmeticScale : CardMemory} alt="Arithmetic Сall" />
                    <div className="GamesFinal__Header__Title">
                        {params.id == 1 ? `Арифметический вызов` : params.id == 2 ? "Блиц-клик" : "Точные пары"}
                    </div>
                </div>
                <div className="GamesFinal__Footer">
                    <div className="GamesFinal__Footer__Total">
                        Очков заработано: {params.total}
                    </div>
                    <div className="GamesFinal__Footer__Time">
                        Время: {params.time}
                    </div>
                </div>
            </div>
        </div>
    );
};
