import { useState } from "react";
import QuizData, { QuizOption } from "../interfaces/QuizData";
import classNames from "classnames";
import IconWrong from "@/features/icons/components/IconWrong";
import IconChecked from "@/features/icons/components/IconChecked";
import QuizResult from "./QuizResult";

interface IProps {
  data: QuizData[];
}

const QuizContainer = ({ data }: IProps) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState<QuizOption | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  function handleNext() {
    if (chosenAnswer?.isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
    if (questionNumber < data.length - 1) {
      setQuestionNumber((prevState) => prevState + 1);
      setChosenAnswer(null);
    } else {
      setIsQuizFinished(true);
    }
  }

  function handleChosenAnswer(option: QuizOption) {
    setChosenAnswer(option);
  }

  function handlePlayAgain() {
    setQuestionNumber(0);
    setChosenAnswer(null);
    setCorrectAnswers(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return (
      <QuizResult
        correctAnswers={correctAnswers}
        totalQuestions={data.length}
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  const currentQuestion = data[questionNumber];

  return (
    <div className="quiz__container flex flex-col relative items-center h-[500px] justify-center rounded-lg bg-[#343964] py-10 w-full">
      <p className="text-sm text-[#8B8EAB] font-bold">Country Quiz</p>

      <div className="grid grid-cols-5 md:flex gap-5 font-semibold my-6">
        {data.map((_, index) => (
          <p
            className={classNames(
              "flex justify-center items-center size-10 bg-[#393F6E] text-center rounded-full",
              {
                "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]":
                  questionNumber >= index,
              }
            )}
            key={index}
          >
            {index + 1}
          </p>
        ))}
      </div>

      <p className="text-center max-w-[450px] text-2xl font-semibold mt-2 mb-8 px-5">
        {currentQuestion.question}
      </p>

      <div className="grid grid-cols-2 max-w-[500px] w-full gap-5 px-5">
        {currentQuestion.options.map((option) => (
          <button
            key={option.name}
            type="button"
            onClick={() => handleChosenAnswer(option)}
            className={classNames(
              "hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8] rounded-lg bg-[#393F6E] ml-0 max-w-[200px] text-xl font-medium w-full h-14 p-2",
              {
                "bg-[#393f6e] flex justify-center items-center gap-2":
                  chosenAnswer === option && option.isCorrect,
                "bg-gradient-to-r from-[#E65895] to-[#BC6BE8] text-white flex justify-center items-center gap-2":
                  chosenAnswer === option &&
                  (!option.isCorrect || option.isCorrect),
                "bg-[#393F6E] flex justify-center items-center gap-2":
                  chosenAnswer !== option &&
                  option.isCorrect &&
                  chosenAnswer !== null,
              }
            )}
            disabled={chosenAnswer !== null}
          >
            {option.name}
            {chosenAnswer === option && !option.isCorrect && <IconWrong />}
            {chosenAnswer !== option &&
              option.isCorrect &&
              chosenAnswer !== null && <IconChecked />}
            {chosenAnswer === option && option.isCorrect && <IconChecked />}
          </button>
        ))}
      </div>

      <button
        className="rounded-lg text-xl disabled:opacity-50 bg-[#393F6E] max-w-[200px] w-full h-14 p-2 mt-8"
        type="button"
        onClick={handleNext}
        disabled={!chosenAnswer}
      >
        Next
      </button>
    </div>
  );
};

export default QuizContainer;
