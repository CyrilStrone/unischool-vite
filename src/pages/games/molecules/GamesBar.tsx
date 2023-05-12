import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { $accessToken } from "../../../common/accessToken";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import "../styles/GamesBar.css"
import { GamesBarInfo } from "../atomes/GamesBarInfo";
import { GamesBarAchievements } from "../atomes/GamesBarAchievements";
import { GamesBarList } from "../atomes/GamesBarList";
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity";
import { InGamesListId } from "../logics/InGamesListId";

export interface IGamesBar {
    id?: string
}

export const GamesBar = (params: IGamesBar) => {
    const [value, setValue] = useState<any>()
    const handleInGamesId = async (id: any) => {
        try {
            const result = await InGamesListId({ id: id });
            setValue(result)
        } catch (error) {
            setCustomValidityShow("Нет игр")
        }
    };
    const [id, setId] = useState<any>()
    useEffect(() => {
        if (id) {
            handleInGamesId(id)
        }
    }, [id])
    useEffect(() => {
        setId(window.location.pathname.split("/Games/Bar/:")[1])
    }, [])
    return (
        value && id && <>
            <div className="GamesBar">
                <GamesBarInfo id={id} value={value} />
                <GamesBarAchievements value={value} />
                <GamesBarList id={id} value={value} />
            </div>
            <CircleBackground />
        </>
    );
};
