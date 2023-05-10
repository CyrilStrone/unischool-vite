import { useState } from "react";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { GamesContinue, IGamesContinue } from "../molecules/GamesContinue";
import { GamesList } from "../molecules/GamesList";
import ArithmeticCall from '../../../common/assets/games/ArithmeticCall.png'

import "../styles/Games.css"

export const Games = () => {
    const [value, setValue] = useState<IGamesContinue>({ title: "Арифметический вызов", description: "Упражнение нацелено на развитие математических способностей и скорости принятия решения. Посчитайте в уме выражение, представленное в центре экрана и затем нажмите на верную кнопку с ответом внизу экрана", top: "10", image: ArithmeticCall, name: "ArithmeticCall" })

    return (
        <>
            <div className="Games">
                <GamesContinue title={value.title} description={value.description} top={value.top} image={value.image} name={value.name} />
                <GamesList />
            </div>
            <CircleBackground />
        </>
    );
};
