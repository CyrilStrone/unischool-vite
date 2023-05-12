import "../styles/Games.css"
import { useEffect, useState } from "react";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { GamesContinue, IGamesContinue } from "../molecules/GamesContinue";
import { GamesList } from "../molecules/GamesList";
import { InGamesList } from "../logics/InGamesList";
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity";

export const Games = () => {
    const [value, setValue] = useState<any>([])
    useEffect(() => {
        handleInGamesList()
    }, [])
    const handleInGamesList = async () => {
        try {
            const result = await InGamesList();
            setValue(result)
        } catch (error) {
            setCustomValidityShow("Нет игр")
        }
    };
    return (
        <>
           {value && <div className="Games">
                <GamesContinue value={value} />
                <GamesList value={value}/>
            </div>}
            <CircleBackground />
        </>
    );
};
