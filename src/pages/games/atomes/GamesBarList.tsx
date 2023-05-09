import { useStore } from "effector-react";
import { $user } from "../../../common/UserHooks";
import "../styles/GamesBarList.css"

interface IGamesBarList {
    id: number
    value: any
}

export const GamesBarList = (params: IGamesBarList) => {
    const user = useStore($user);
    return (
        <div className="GamesBarList GamesBar__Block">
            <div className="GamesBar__Title">
                Список игроков
            </div>
            <div className="GamesBarList__General">
                <div className="GamesBarList__General__Header">
                    <div>
                        Место
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        Игрок
                    </div>
                    <div>
                        Игра
                    </div>
                    <div>
                        Очки
                    </div>
                </div>
                <div className="GamesBarList__General__Footer" >
                    {params.value.other.map((e: any, id: number) =>
                        <div className={" GamesBarList__General__Footer__item" }>
                            <div>
                                {id + 1}
                            </div>
                            <div>
                                <img src={e.image} alt="" />
                            </div>
                            <div>
                                {e.name}
                            </div>
                            <div>
                                {params.id == 1 ? "Арифметический вызов" : params.id == 2 ? "Поиск карты" : "Вспомнить все"}
                            </div>
                            <div>
                                {e.total}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="GamesBarList__General__User">
                {params.value.other.map((e: any, id: number) =>
                    id == 2 && <>
                        <div>
                            {id + 1}
                        </div>
                        <div>
                            <img src={e.image} alt="" />
                        </div>
                        <div>
                            {e.name}
                        </div>
                        <div>
                            {params.id == 1 ? "Арифметический вызов" : params.id == 2 ? "Поиск карты" : "Вспомнить все"}
                        </div>
                        <div>
                            {e.total}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
