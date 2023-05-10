import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { $accessToken } from "../../../common/accessToken";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import "../styles/GamesBar.css"
import { NavLink } from "react-router-dom";
import { GamesBarInfo } from "../atomes/GamesBarInfo";
import { GamesBarAchievements } from "../atomes/GamesBarAchievements";
import { GamesBarList } from "../atomes/GamesBarList";
import { setCustomValidityShow } from "../../../ui/customValidity/organoids/CustomValidity";
import { InGamesList } from "../logics/InGamesList";
export interface IGamesBar {
    id?: string
}
export const GamesBar = (params: IGamesBar) => {
    const [value, setValue] = useState<any>(
        {
            you:
            {
                name: "Ванька 0",
                image: "",
                login: "face",
                shockMode: 12,
                totalPoints: 10,
                gameName: "Арифметический прогресс",
                total: 123
            },
            other: [{
                name: "Ванька 1",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            }, {
                name: "Ванька 2",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            }, {
                name: "Ванька 3",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            },{
                name: "Ванька 1",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            }, {
                name: "Ванька 2",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            }, {
                name: "Ванька 3",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            },{
                name: "Ванька 1",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            }, {
                name: "Ванька 2",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            }, {
                name: "Ванька 3",
                image: "",
                login: "face",
                gameName: "Арифметический прогресс",
                total: 123
            }]

        })
    
    const accessToken = useStore($accessToken);
    const [id, setId] = useState<any>()
    // const requestInArcticle = async (id: number) => {
    // setValue(await InArcticle({ id: id }))
    // }
    useEffect(() => {
        if (id) {
            console.log(id)
        }
    }, [id])
    useEffect(() => {
        setId(window.location.pathname.split("/Games/Bar/:")[1])
    }, [])
    return (
        <>
            <div className="GamesBar">
                <GamesBarInfo id={id} value={value} />
                <GamesBarAchievements id={id} value={value} />
                <GamesBarList id={id} value={value} />
            </div>
            <CircleBackground />
        </>
    );
};
