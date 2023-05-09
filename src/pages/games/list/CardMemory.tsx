import MemoryGame from "react-card-memory-game";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import "../styles/CardMemory.css"

export const CardMemory = () => {


    return (
        <>
            <div className="CardMemory">
                <MemoryGame gridNumber={4} frontCardsCss={"CardMemory__Front"} backCardsCss={"CardMemory__Back"}/>
            </div>
            <CircleBackground />
        </>
    );
};
