export interface Todo {
  title: string;
  text: string;
}

export interface QuestionType{
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}


export interface QuizType{
    question: string;
    answer:string;
    options: string[]

}