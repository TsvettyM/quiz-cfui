export interface QuizOption {
  name: string;
  isCorrect: boolean;
}

interface QuizData {
  question: string;
  options: QuizOption[];
}

export default QuizData;
