import "../styles/GamesFinal.css"
import ArithmeticCall from '../../../common/assets/games/ArithmeticCall.png'
import CardMemory from '../../../common/assets/games/CardMemory.png'
import ArithmeticScale from '../../../common/assets/games/ArithmeticScale.png'
import { BackButton } from "../../../ui/backbutton/organoids/BackButton";
import { IInGamesFinal, InGamesFinal } from "../logics/InGamesFinal";
import { useEffect } from "react";

export interface IGamesFinal {
    id: number
    total: number
    time: any
}

export const GamesFinal = (params: IGamesFinal) => {
    const handleInGamesId = async (params: IInGamesFinal) => {
        try {
            await InGamesFinal({ ...params });
        } catch (error) {
            // setCustomValidityShow("Ошибка сохранения результата")
        }
    }
    useEffect(() => {
        if (params.total)
            handleInGamesId({ game_id: params.id, score: params.total, time: params.time })
    }, [params.total])
    return (
        <div className="GamesFinal__General">
            <BackButton link={"/Games"} />
            <div className="GamesFinal">
                <div className="GamesFinal__Header">
                    <img className="GamesFinal__Header__Image" src={params.id == 1 ? ArithmeticCall : params.id == 2 ? CardMemory : ArithmeticScale} alt="Arithmetic Сall" />
                    <div className="GamesFinal__Header__Title">
                        {params.id == 1 ? `Арифметический вызов` : params.id == 2 ? "Точные пары" : "Блиц-клик"}
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
