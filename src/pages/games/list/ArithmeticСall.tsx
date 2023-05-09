import { useEffect, useState } from "react";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import "../styles/ArithmeticСall.css"
type Question = {
    question: string;
    answers: number[];
    answer: number;
};
export const ArithmeticСall = () => {
    const [questions, setQuestions] = useState<Question[]>([
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
        },{
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
    const [stop, setStop] = useState<boolean>(false);

    const handleNextQuestion = () => {
        setIsAnswered(true);
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 5);
            setTimeout(() => handleNextButtonClick(), 1000)
        } else {
            // setScore(score - 2);
            setTimeout(() => handleNextButtonClick(), 1000)
        }

    };

    const handleNextButtonClick = () => {
        setSelectedAnswer(null);
        setIsAnswered(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setCurrentQuestionIndex(0)
            setScore(0)
            setStop(true)
        }
    };

    const calculateTime = (startTime:any) => {
        const getCurrentTime = () => {
          const currentTime:any = new Date();
          const timeDiff = currentTime - startTime;
          const seconds = Math.floor(timeDiff / 1000) % 60;
          const minutes = Math.floor(timeDiff / 1000 / 60) % 60;
          const hours = Math.floor(timeDiff / 1000 / 60 / 60);
      
          const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
          setTime(formattedTime);
        };
      
        const padZero = (num:any) => {
          return num.toString().padStart(2, '0');
        };
      
        getCurrentTime();
        if(!stop){
        setInterval(getCurrentTime, 1000);
        }
      };
      
      // Пример использования
     
useEffect(()=>{
    const startTime = new Date(); // Начальное время
    calculateTime(startTime);
},[])

    return (
        <>
            <div className="ArithmeticСall">
                <div>
                    <div>Вопрос {currentQuestionIndex + 1}</div>
                    <div>{questions[currentQuestionIndex].question}</div>
                    <div>
                        {questions[currentQuestionIndex].answers.map((answer) => (
                            <div
                                key={answer}
                                onClick={() => setSelectedAnswer(answer)}
                                style={{
                                    fontWeight: answer === selectedAnswer ? 'bold' : 'normal',
                                    backgroundColor:
                                        isAnswered && answer === questions[currentQuestionIndex].answer
                                            ? 'green' // Подсветка правильного ответа
                                            : isAnswered && answer === selectedAnswer
                                                ? 'red' // Подсветка неправильного ответа
                                                : 'transparent',
                                    cursor: 'pointer',
                                }}
                            >
                                {answer}
                            </div>
                        ))}
                    </div>
                    <button disabled={isAnswered} onClick={handleNextQuestion}>
                        Ответить
                    </button>
                    <div>
                        <div>Баллы: {score}</div>
                    </div>
                    <div>
                        {time}
                    </div>
                </div>
            </div>
            <CircleBackground />
        </>
    );
};
