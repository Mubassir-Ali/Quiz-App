import React, { useEffect, useState } from 'react';
import { QuizServices } from './Services/QuizServices';
import { QuizCard } from './Components/QuizCard';
import './App.css'

import { QuizType } from './Types/Types';

function App() {
  const [quiz, setQuiz] = useState<QuizType[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const Quizdata: QuizType[] = await QuizServices(5);
      setQuiz(Quizdata);
    };

    fetchData();
  }, []);





  return (
    <div className="App">
      {quiz.length > 0 ? <QuizCard

        answer={quiz[1].answer}
        question={quiz[1].question}
        options={quiz[1].options}
      /> :
        null}
    </div>
  );
}

export default App;
