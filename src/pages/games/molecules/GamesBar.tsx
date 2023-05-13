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

//Полная информация по игре по id
export const GamesBar = () => {
    const [value, setValue] = useState<any>();
    const [id, setId] = useState<any>();
    const [scoreGeneralUser, setScoreGeneralUser] = useState<any | null>();
    const [placeUser, setPlace] = useState<any | null>()
    const [percentUser, setPercentUser] = useState<any | null>()
    const handleInGamesId = async (id: any) => {
        try {
            const result = await InGamesListId({ id: id });
            setValue(result)
        } catch (error) {
            setCustomValidityShow("Нет игр")
        }
    };
    useEffect(() => {
        setId(window.location.pathname.split("/Games/Bar/:")[1])
    }, [])
    useEffect(() => {
        if (id) {
            handleInGamesId(id)
        }
    }, [id])
    useEffect(() => {
        if (value && value.myScore && value.myScore.score && value.best) {

            let sum: any = 0;
            let place: any = null;
            let percent: any = null;

            value.myScore.score.map((e: any) => {
                sum += e;
            })
            value.best.map((e: any) => {
                if (e.game_id && e.game_id == value.game.id) {
                    place = e.place
                    percent = e.best.toFixed(0)
                }
            })
            
            setScoreGeneralUser({ ...scoreGeneralUser, sum: sum })
            setPlace(place)
            setPercentUser(percent)
        }
        return () => {
            setScoreGeneralUser(null)
            setPlace(null)
            setPercentUser(null)
        }
    }, [value])
    return (
        value && id && <>
            <div className="GamesBar">
                <GamesBarInfo value={value} />
                <GamesBarAchievements value={value} percentUser={percentUser} scoreGeneralUser={scoreGeneralUser} placeUser={placeUser} />
                <GamesBarList value={value} placeUser={placeUser} />
            </div>
            <CircleBackground />
        </>
    );
};
