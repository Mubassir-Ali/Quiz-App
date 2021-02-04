import { QuizType, QuestionType } from "./../Types/Types";


const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)


export const QuizServices = async (totalQuestion:number) => {
  const req = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}`);
  const { results } = await req.json();

  const quiz: QuizType[] = results.map((QuesObject: QuestionType) => {
    return {
      question: QuesObject.question,
      answer: QuesObject.correct_answer,
      options: shuffleArray(QuesObject.incorrect_answers.concat(QuesObject.correct_answer))
    };
  });

  return quiz;
};
