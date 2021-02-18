import React, { useEffect, useState } from "react";
import { QuizServices } from "./Services/QuizServices";
import { QuizCard } from "./Components/QuizCard";
import { QuizType } from "./Types/Types";
import "./App.css";

function App() {
  const [quiz, setQuiz] = useState<QuizType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // try{
        const Quizdata: any = await QuizServices(5);
        setQuiz(Quizdata);
  

      // }catch(err){
      //   console.log(err);
        
      // }
 
    };

    fetchData();
  }, []);

  console.log(quiz);
  return (
    <div className="App">
      {quiz.length ? (
        <QuizCard
          answer={quiz[0].answer}
          question={quiz[0].question}
          options={quiz[0].options}
        />
      ) : (
        <h2>Page Loading</h2>
      )}
    </div>
  );
}

export default App;
