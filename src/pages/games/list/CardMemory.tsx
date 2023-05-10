import { useEffect, useState } from "react";
import MemoryGame from "react-card-memory-game";
import { setLevel } from "../../../common/UserHooks";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { GamesFinal } from "../molecules/GamesFinal";
import "../styles/CardMemory.css"

export const CardMemory = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [time, setTime] = useState<string | null>(null);
    const [finalTime, setFinalTime] = useState<string | null>(null);
    const [stop, setStop] = useState<boolean>(false);
    const calculateTime = (startTime: any) => {
        const getCurrentTime = () => {
            const padZero = (num: any) => {
                return num.toString().padStart(2, '0');
            };
            const currentTime: any = new Date();
            const timeDiff = currentTime - startTime;
            const seconds = Math.floor(timeDiff / 1000) % 60;
            const minutes = Math.floor(timeDiff / 1000 / 60) % 60;
            const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;
            setTime(formattedTime);
        };
        getCurrentTime();
        setInterval(getCurrentTime, 1000);

    };
    useEffect(() => {
        setLevel({ start: 0, end: 8, score: currentQuestionIndex * 5, index: currentQuestionIndex })
        calculateTime(new Date());
    }, [])
    useEffect(() => {
        if (currentQuestionIndex !== 0) {
            setLevel({ start: 0, end: 8, score: currentQuestionIndex * 4, index: currentQuestionIndex })
            if (currentQuestionIndex > 7) {
                setFinalTime(time)
                setTimeout(() => setStop(true), 1000)
            }
        }
    }, [currentQuestionIndex])
    return (
        <>
            <div className="CardMemory">
                {stop ?
                    <GamesFinal id={1} total={currentQuestionIndex * 5} time={finalTime} />
                    :
                    <>
                        <div className="CardMemory__Time">
                            {finalTime ? finalTime : time}
                        </div>
                        <MemoryGame gridNumber={4} foundPair={(event: any) => setCurrentQuestionIndex(currentQuestionIndex + 1)} frontCardsCss={"CardMemory__Front"} backCardsCss={"CardMemory__Back"} />
                    </>
                }
            </div>

            <CircleBackground />
        </>
    );
};
