import React, { useEffect, useState } from "react";
import { QuizServices } from "./Services/QuizServices";
import { QuizCard } from "./Components/QuizCard";

import { QuizType } from "./Types/Types";

function App() {
  const [quiz, setQuiz] = useState<QuizType[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const Quizdata: QuizType[] = await QuizServices(5);
      setQuiz(Quizdata);

      
      
    };

    fetchData();
  }, []);


  console.log(quiz);
  return (
    <div className="App">

      <QuizCard data={quiz}/>

      </div>

  );
}

export default App;
