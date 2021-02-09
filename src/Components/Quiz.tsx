import React, { useEffect, useState } from 'react';
import { QuizServices } from './../Services/QuizServices';
import { QuizCard } from './QuizCard';
import { QuizType } from './../Types/Types';

export const Quiz = () => {
    let [quiz, setQuiz] = useState<QuizType[]>([]);
    let [currentStep, setCurrentStep] = useState(0)
    let [score, setScore] = useState(0)
    let [showResult, setShowResult] = useState(false)
    let totalQuestion=10

    useEffect(() => {
        const fetchData = async () => {
            const Quizdata: QuizType[] = await QuizServices(totalQuestion);
            setQuiz(Quizdata);
        };

        fetchData();
    }, []);

    const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault()

        const currentQuestion: QuizType = quiz[currentStep]


        if (userAns === currentQuestion.answer) {
            setScore(++score)
        }

        if (currentStep !== quiz.length - 1) {
            setCurrentStep(++currentStep)
            console.log(`current Step: ${currentStep}`);

        } else {
            setShowResult(true)
        }

    }

    if (showResult) {

        return (<div>
            <h2>Result</h2>
            <p>Your Score is: {score} out of {quiz.length}</p>
        </div>)

    }

    return (
        <div>
            {quiz.length > 0 ? <QuizCard

                callback={handleSubmit}
                question={quiz[currentStep].question}
                options={quiz[currentStep].options}
            /> :
                <div className="loader">
                    <img src="https://64.media.tumblr.com/5d20cb9d224eb97fab488a8ca5b38d33/tumblr_nsocqzECoE1sjmeczo1_540.gifv" />
                </div>
            }
        </div>
    )
}
