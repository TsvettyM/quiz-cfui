import axios from "axios";
import { useEffect, useState } from "react";
import QuizData from "../interfaces/QuizData";
import QuizContainer from "./QuizContainer";
import Image from "next/image";

const HomepageView = () => {
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/quiz/1")
      .then((res) => setQuizData(res.data))
      .catch(() => {
        setError("Error fetching quiz. Please reload page.");
      });
  }, []);

  if (quizData.length === 0) {
    return error;
  }

  return (
    <div className="homepage__view max-w-[1000px] h-full m-auto flex flex-col justify-center items-center text-[#E2E4F3]">
      <Image src="/images/background.jpg" alt="" fill draggable={false} />

      <QuizContainer data={quizData} />
    </div>
  );
};

export default HomepageView;
