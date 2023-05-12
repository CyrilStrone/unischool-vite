import "../styles/ArithmeticScale.css"
import { useEffect, useState } from "react";
import { setLevel } from "../../../common/UserHooks";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { GamesFinal } from "../molecules/GamesFinal";

export const ArithmeticScale = () => {
    const [label, setLabel] = useState<boolean>(true);
    const [numbers, setNumbers] = useState<any>([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [finalTime, setFinalTime] = useState<string | null>(null);
    const [stop, setStop] = useState<boolean>(false);

    useEffect(() => {
        generateNumbers();
        setLevel({ start: 0, end: 10, score: score, index: currentQuestionIndex })
        calculateTime(new Date());
    }, []);

    const generateNumbers = () => {
        const generatedNumbers = [];
        for (let i = 0; i < 8; i++) {
            let number;
            do {
                number = {
                    value: generateRandomNumber(),
                    left: getRandomPosition(),
                    top: getRandomPosition(),
                };
            } while (isNumberExists(number.value) || !isValidPosition(number, generatedNumbers));

            generatedNumbers.push(number);
        }
        setNumbers(generatedNumbers);
    };

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 100);
    };

    const getRandomPosition = () => {
        return Math.floor(Math.random() * 640) + 80; // Диапазон от 80 до 720 (800 - размер числа)
    };

    const isNumberExists = (value: any) => {
        return numbers.some((number: any) => number.value === value);
    };

    const isValidPosition = (newNumber: any, existingNumbers: any) => {
        for (let i = 0; i < existingNumbers.length; i++) {
            const existingNumber = existingNumbers[i];
            const distance = Math.sqrt(
                Math.pow(newNumber.left - existingNumber.left, 2) +
                Math.pow(newNumber.top - existingNumber.top, 2)
            );
            if (distance < 80) {
                return false;
            }
        }
        return true;
    };

    const handleNumberSelection = (selectedNumber: any) => {
        const maxNumber = Math.max(...numbers.map((number: any) => number.value));
        const minNumber = Math.min(...numbers.map((number: any) => number.value));
        const isCorrect =
            (label === true && selectedNumber === maxNumber) ||
            (label === false && selectedNumber === minNumber);

        if (isCorrect) {
            setScore(score + 5);
            setNumbers(numbers.filter((number: any) => number.value !== selectedNumber));
        } else {
            setNumbers(numbers.filter((number: any) => number.value !== selectedNumber));
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

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
        if (numbers.length < 8 && numbers.length !== 0) {
            let newNumber;
            do {
                newNumber = {
                    value: generateRandomNumber(),
                    left: getRandomPosition(),
                    top: getRandomPosition(),
                };
            } while (isNumberExists(newNumber.value) || !isValidPosition(newNumber, numbers));

            setNumbers([...numbers, newNumber]);
            setLabel(Math.random() < 0.5);
        }
    }, [numbers])

    useEffect(() => {
        setLevel({ start: 0, end: 10, score: score, index: currentQuestionIndex })
        if (currentQuestionIndex > 9) {
            setFinalTime(time)
            setStop(true)
        }
    }, [currentQuestionIndex])

    return (
        <>
            <div className="ArithmeticScale">
                {stop ?
                    <GamesFinal id={3} total={score} time={finalTime} /> :
                    <>
                        <div className="ArithmeticScale__Time">
                            {time}
                        </div>
                        <div className="ArithmeticScale__Label" >{label ? "Вверх" : "Вниз"}</div>
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            {numbers.map((number: any,id:any) => (
                                <div
                                    className="ArithmeticScale__Number"
                                    style={{ left: `${number.left}px`, top: `${number.top}px`, display: `flex` }}
                                    key={id}
                                    onClick={() => handleNumberSelection(number.value)}
                                >{number.value}</div>
                            ))}
                        </div>
                    </>
                }
            </div>
            <CircleBackground />
        </>
    );
};


