import IconCongrats from "@/features/icons/components/IconCongrats";

interface IProps {
  correctAnswers: number;
  totalQuestions: number;
  onPlayAgain: () => void;
}

const QuizResult = (props: IProps) => {
  const { correctAnswers, onPlayAgain, totalQuestions } = props;

  return (
    <div className="quiz__result relative flex flex-col justify-center items-center bg-[#393F6E] p-3 h-full max-h-[400px] rounded-lg">
      <IconCongrats className="my-4" />
      <p className="text-2xl text-center max-w-[340px]">
        Congrats! You completed the quiz.
      </p>

      <p className="font-medium mt-5 mb-1">
        You answered {correctAnswers}/{totalQuestions} correctly!
      </p>

      <button
        className="rounded-lg text-lg bg-gradient-to-r from-[#E65895] to-[#BC6BE8] max-w-[250px] w-full h-14 p-2 my-10"
        onClick={onPlayAgain}
      >
        Play again
      </button>
    </div>
  );
};

export default QuizResult;
