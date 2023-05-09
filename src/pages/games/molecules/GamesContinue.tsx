import "../styles/GamesContinue.css"
import { NavLink } from "react-router-dom";

export interface IGamesContinue {
    title: string
    description: string
    top: string
    image: string
    name: string
}
export const GamesContinue = (params: IGamesContinue) => {

    return (
        <div className="GamesContinue">
            <div className="GamesContinue__Title">Продолжить тренировку</div>
            <div className="GamesContinue__Block">
                <img className="GamesContinue__Block__Image" src={params.image} alt="Arithmetic Сall" />
                <div className="GamesContinue__Block__Info">
                    <div className="GamesContinue__Block__Info__Title">
                        {params.title}
                    </div>
                    <div className="GamesContinue__Block__Info__Description">
                        {params.description}
                    </div>
                    <div className="GamesContinue__Block__Info__Footer">
                        <NavLink className="GamesContinue__Block__Info__Footer__Link" to={`/Games/Bar/${params.name}`}>Играть</NavLink>
                        <div className="GamesContinue__Block__Info__Footer__Top">
                            Вы лучше: {params.top}% игроков
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
