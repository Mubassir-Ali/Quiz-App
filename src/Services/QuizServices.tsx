import { QuizType, QuestionType } from "./../Types/Types";

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const QuizServices = async (totalQuestion: number) => {
  try {
    const req = await fetch(
      `https://opentdb.com/api.php?amount=${totalQuestion}`
    );
    const { results } = await req.json();

    // console.log("fetch fata from api", results);
    console.log("Type of collections", typeof results);

    const quiz: QuizType[] = results.map((QuesObject: QuestionType) => {
      return {
        question: QuesObject.question,
        answer: QuesObject.correct_answer,
        options: shuffleArray(
          QuesObject.incorrect_answers.concat(QuesObject.correct_answer)
        ),
      };
    });

    localStorage.setItem("quiz", JSON.stringify(results));
    return quiz;
    
  } catch (err) {
    alert("Offline");
    let collections = localStorage.getItem("quiz");
    if (collections) {
      let results = JSON.parse(collections);

      console.log("Type of collections", typeof results);

      if (results) {
        console.log("collect data from local storage", results);

        const quiz: QuizType[] = results.map((QuesObject: QuestionType) => {
          return {
            question: QuesObject.question,
            answer: QuesObject.correct_answer,
            options: shuffleArray(
              QuesObject.incorrect_answers.concat(QuesObject.correct_answer)
            ),
          };
        });

 

        return quiz;
      }
    }
  }
};
