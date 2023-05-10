import { useEffect, useState } from "react";
import { setLevel } from "../../../common/UserHooks";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { GamesFinal } from "../molecules/GamesFinal";
import "../styles/ArithmeticCall.css"
interface IQuestion  {
    question: string
    answers: number[]
    answer: number
};
export const ArithmeticCall = () => {
    const [questions, setQuestions] = useState<IQuestion[]>([
        {
            question: "1+4",
            answers: [5, 6, 2, 10],
            answer: 5,
        },
        {
            question: "3+4",
            answers: [5, 6, 7, 10],
            answer: 7,
        },
        {
            question: "1+7",
            answers: [5, 6, 2, 8],
            answer: 8,
        },
        {
            question: "6+4",
            answers: [5, 6, 2, 10],
            answer: 10,
        }, {
            question: "6+6",
            answers: [12, 6, 2, 10],
            answer: 12,
        }
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [time, setTime] = useState<string | null>(null);
    const [finalTime, setFinalTime] = useState<string | null>(null);
    const [stop, setStop] = useState<boolean>(false);
    const handleNextQuestion = (answer: any) => {
        setSelectedAnswer(answer)
        setIsAnswered(true);
        if (answer === questions[currentQuestionIndex].answer) {
            setScore(score + 5);
        }
        setTimeout(() => {
            setSelectedAnswer(null);
            setIsAnswered(false);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }, 1000)
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
        setLevel({ start: 0, end: 5, score: score, index: currentQuestionIndex })
        if (currentQuestionIndex > 4) {
            setFinalTime(time)
            setTimeout(() => setStop(true), 1000)
        }
    }, [currentQuestionIndex])
    useEffect(() => {
        setLevel({ start: 0, end: 5, score: score, index: currentQuestionIndex })
        calculateTime(new Date());
    }, [])
    return (
        <>
            <div className="ArithmeticCall">
                {stop ?
                    <GamesFinal id={1} total={score} time={finalTime} /> :
                    questions[currentQuestionIndex] && <div className="ArithmeticCall__Block">
                        <div className="ArithmeticCall__Block__Time">
                            {time}
                        </div>
                        <div className="ArithmeticCall__Block__Question">
                            <div>
                                {questions[currentQuestionIndex].question}
                            </div>
                            <div className="ArithmeticCall__Block__Question__Equals" >
                                =
                            </div>
                        </div>
                        <div className="ArithmeticCall__Block__Answer">
                            {questions[currentQuestionIndex].answers.map((answer) => (
                                <div className="ArithmeticCall__Block__Answer__Item"
                                    key={answer}
                                    onClick={() => { !isAnswered && handleNextQuestion(answer); }}
                                    style={{
                                        fontWeight: answer === selectedAnswer ? 'bold' : 'normal',
                                        backgroundColor:
                                            isAnswered && answer === questions[currentQuestionIndex].answer
                                                ? 'rgba(58, 190, 37, 1)'
                                                : isAnswered && answer === selectedAnswer
                                                    ? 'rgba(218, 45, 45, 1)'
                                                    : 'white',
                                        color: isAnswered && answer === questions[currentQuestionIndex].answer
                                            ? 'white'
                                            : isAnswered && answer === selectedAnswer
                                                ? 'white'
                                                : 'black',
                                        cursor: 'pointer',
                                        border: isAnswered && answer === questions[currentQuestionIndex].answer
                                            ? '10px solid rgba(58, 190, 37, 1)'
                                            : isAnswered && answer === selectedAnswer
                                                ? '10px solid rgba(218, 45, 45, 1)'
                                                : '10px solid #8459ff',
                                    }}
                                >
                                    {answer}
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
            <CircleBackground />
        </>
    );
};
