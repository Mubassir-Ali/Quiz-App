import React, { useEffect, useState } from 'react';
import { QuizServices } from './Services/QuizServices';
import { QuizCard } from './Components/QuizCard';
import { QuizType } from './Types/Types';
import Result from './Components/Result'





export const App = () => {
  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)
  let [showResult, setShowResult] = useState(false)
  let totalQuestion=5

  useEffect(() => {
      const fetchData = async () => {
          
            let Quizdata: any = await QuizServices(totalQuestion);
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

  const restart =(e: React.FormEvent<EventTarget>, restart:number)=>{
      e.preventDefault()
      setCurrentStep(0)
      setShowResult(false)
      setScore(0)    
    console.log(restart)
      
      
  }


  return (

      <div>
          {showResult? <Result scores={score} total={quiz.length} callback={restart}/>:
          quiz.length > 0 ? <QuizCard


              callback={handleSubmit}
              QNo={currentStep}
              question={quiz[currentStep].question}
              options={quiz[currentStep].options}
          /> :
            <div className="loader">
                <h1>Loading...</h1>
            </div>
          
          }
      </div>
  )

}

export default App;
