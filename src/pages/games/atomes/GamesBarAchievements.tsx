import "../styles/GamesBarAchievements.css"
import Like from '../../../common/assets/profile/Like.png'
import Fire from '../../../common/assets/profile/Fire.png'
import Level from '../../../common/assets/profile/Level.png'
import Best from '../../../common/assets/profile/Best.png'
import { useEffect, useState } from "react";

interface IGamesBarAchievements {
    value?: any
    scoreGeneralUser?: any
    placeUser?: any
    percentUser?: any
}

export const GamesBarAchievements = (params: IGamesBarAchievements) => {
    return (
        params.value && <div className="GamesBarAchievements GamesBar__Block">
            <div className="GamesBar__Title">
                Ваши достижения
            </div>
            <div className="GamesBarAchievements__List">
                <div className="GamesBarAchievements__List__shockMode GamesBarAchievements__List__Item">
                    <img className="GamesBarAchievements__List__Item__Image" src={Fire} alt="" />
                    <div className="GamesBarAchievements__List__Item__Info">
                        <div className="GamesBarAchievements__List__Item__Info__Title">
                            Ударный режим
                        </div>
                        <div className="GamesBarAchievements__List__Item__Info__Total">
                            {(params.value.myScore && params.value.myScore.inARow) ? params.value.myScore.inARow : 0} дней
                        </div>
                    </div>
                </div>
                <div className="GamesBarAchievements__List__totalPoints GamesBarAchievements__List__Item">
                    <img className="GamesBarAchievements__List__Item__Image" src={Like} alt="" />
                    <div className="GamesBarAchievements__List__Item__Info">
                        <div className="GamesBarAchievements__List__Item__Info__Title">
                            Всего очков
                        </div>
                        <div className="GamesBarAchievements__List__Item__Info__Total">
                            {(params.scoreGeneralUser && params.scoreGeneralUser.sum) ? params.scoreGeneralUser.sum : 0} очков
                        </div>
                    </div>
                </div>
                <div className="GamesBarAchievements__List__Item">
                    <img className="GamesBarAchievements__List__Item__Image" src={Level} alt="" />
                    <div className="GamesBarAchievements__List__Item__Info">
                        <div className="GamesBarAchievements__List__Item__Info__Title">
                            Ваш уровень
                        </div>
                        <div className="GamesBarAchievements__List__Item__Info__Total">
                            {(params.value.myScore && params.value.myScore.bestScore) ? 5 : 0} уровень
                        </div>
                    </div>
                </div>
                <div className=" GamesBarAchievements__List__Item">
                    <img className="GamesBarAchievements__List__Item__Image" src={Best} alt="" />
                    <div className="GamesBarAchievements__List__Item__Info">
                        <div className="GamesBarAchievements__List__Item__Info__Title">
                            Вы лучше
                        </div>
                        <div className="GamesBarAchievements__List__Item__Info__Total">
                            {params.percentUser ? params.percentUser : 0}% игроков
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
