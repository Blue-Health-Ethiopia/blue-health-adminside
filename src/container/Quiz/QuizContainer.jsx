import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QA from '../../assets/QandA.png'
import { editing, enableEditing, removeQuiz, saveEditing } from '../../redux/actions';

const QuizContainer = () => {
  const quizs = useSelector((state) => state.quiz.quizs);
  const isEditing = useSelector((state) => state.quiz.isEditing);
  const selectedIndex = useSelector((state) => state.quiz.selectedQuestionIndex);
  const dispatch=useDispatch()

  const getChoiceLetter = (choiceIndex) => {
    return String.fromCharCode(65 + choiceIndex); // 65 is the ASCII code for 'A'
  };

  const handleDeleteQuiz = (index) => {
    dispatch(removeQuiz(index));
  }
  const handleEnableEditQuestion = (index) => {
    dispatch(enableEditing(index));
  }
  const handleSaveQuestion = (index) => {
    dispatch(saveEditing())
  }
const handleEditQuestion = (indexQ, newQuestion) => {
  dispatch(editing(indexQ, newQuestion));
};

  return (
    <div
      className={`h-[40rem] overflow-y-scroll scrollbar-thin ${
        quizs.length === 5 ? 'w-full' : 'w-3/4'
      } flex gap-4 ${
        quizs.length === 0 && 'items-center justify-center'
      } flex-col`}
    >
      {quizs.length === 0 ? (
        <div className="flex flex-col items-center gap-1 -mt-12">
          <img className="w-28 opacity-50" src={QA} alt="" />{' '}
          <h1 className="capitalize font-semibold text-primary tracking-widest">
            No questions added!!!
          </h1>
        </div>
      ) : (
        quizs.map((quiz, index) => (
          <>
            <div className="flex gap-4 items-center">
              <p className="text-xs">{index + 1}</p>|
              <div className="flex items-center w-full gap-8">
                <h1 className="text-sm font-bold tracking-wider capitalize">
                  {isEditing && selectedIndex === index ? (
                    <input
                      type="text"
                      className="outline-none tracking-wider capitalize border-b w-fit border-primaryMedium"
                      value={quiz.question}
                      onChange={(e) =>
                        handleEditQuestion(index, e.target.value)
                      }
                    />
                  ) : (
                    quiz.question
                  )}
                </h1>
                <button
                  onClick={() => handleDeleteQuiz(index)}
                  className="text-xs cursor-pointer text-red-500 hover:text-red-700 duration-200"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    isEditing
                      ? handleSaveQuestion(index)
                      : handleEnableEditQuestion(index);
                  }}
                  className="text-xs cursor-pointer text-blue-500 hover:text-blue-700 duration-200"
                >
                  {isEditing ? 'Save' : 'Edit'}
                </button>
              </div>
            </div>
            {quiz.choices.map((choice, choiceIndex) => (
              <>
                <div className="text-sm ml-12 track capitalize flex items-center gap-2">
                  <span className="text-xs">
                    {getChoiceLetter(choiceIndex)}.
                  </span>
                  {choice}
                  <span className="text-primary text-xs font-bold">
                    {quiz.correctAnswer === choice && '(Correct answer)'}
                  </span>
                </div>
              </>
            ))}
          </>
        ))
      )}
    </div>
  );
}

export default QuizContainer