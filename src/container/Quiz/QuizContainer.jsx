import React from 'react'
import { useSelector } from 'react-redux'

const QuizContainer = () => {
  const quizs = useSelector((state) => state.quiz.quizs);

  const getChoiceLetter = (choiceIndex) => {
    return String.fromCharCode(65 + choiceIndex); // 65 is the ASCII code for 'A'
  };
  return (
    <div className="h-full w-3/4 flex gap-4 flex-col">
      {quizs.map((quiz, index) => (
        <>
          <div className="flex gap-4 items-center">
            <p className="text-xs">{index + 1}</p>|
            <h1 className="text-sm font-bold tracking-wider capitalize">
              {quiz.question}
            </h1>
          </div>
          {quiz.choices.map((choice, choiceIndex) => (
            <>
              <div className="text-sm ml-12 track capitalize flex items-center gap-2">
                <span className="text-xs">{getChoiceLetter(choiceIndex)}.</span>
                {choice}
              </div>
            </>
          ))}
        </>
      ))}
    </div>
  );
}

export default QuizContainer