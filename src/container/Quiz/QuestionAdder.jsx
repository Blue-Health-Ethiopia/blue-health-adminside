import React from 'react';
import { EditButton } from '../../components/common/Button';
import { ChoiceIcon, DeleteIcon, QuestionIcon } from '../../assets/Icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addChoices, addQuestion, addQuiz, removeChoice, resetInputs, selectChoice, updateChoice } from '../../redux/actions';

const QuestionAdder = () => {
  const choice = useSelector((state) => state.quiz.choices)
  const question = useSelector((state) => state.quiz.question)
  const answer = useSelector((state) => state.quiz.correctAnswer);
  const dispatch = useDispatch() 
  
  const additionalQuizs = [
    {
      question: question,
      choices: choice,
      correctAnswer: answer,
    },
  ];

  const handleChoiceChange = (index, choice) => {
    dispatch(updateChoice(index, choice));
  };

    const addChoice = () => {
    if(choice.length<6)
    {dispatch(addChoices())}
    };
    
  const handleQuestion = (e) => {
      dispatch(addQuestion(e.target.value))
    }
    
    const removeOrder = (index) => {
     dispatch(removeChoice(index))
  };
  
  const handleChoiceSelection = (choice) => {
    dispatch(selectChoice(choice))
  }

const addAllQuiz = () => {

  if (!question.trim()) {
    alert('Please enter a valid question');
    return;
  }

  if (choice.length < 2) {
    alert('Please enter at least two choices');
    return;
  }

  if (choice.some((c) => !c.trim())) {
    alert('Please enter valid choices for all options');
    return;
  }

  if (answer !== '') {
    dispatch(addQuiz(additionalQuizs));
    dispatch(resetInputs());
  } else {
    alert('Select a choice');
  }
};


  return (
    <div className="bg-background w-1/2 p-6 rounded-md">
      <div className="mb-6">
        <h2 className="text-base tracking-wide font-semibold mb-2">
          Add a Question
        </h2>
        <textarea
          rows={7}
          className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
          placeholder="Enter your question here..."
          value={question}
          onChange={(e) => handleQuestion(e)}
        />
      </div>
      <div>
        <h2 className="text-base tracking-wide font-semibold">Add Choices</h2>
        <p className="text-sm mb-2 text-primary">Tick the correct answer</p>
        {answer}
        {choice.map((choice, index) => (
          <div className="w-full bg-white flex items-center gap-3 text-sm p-3 rounded-md mb-2 outline-none border border-backgroundDim">
            <input
              type="radio"
              style={{ accentColor: '#004579' }}
              name="choices"
              onClick={()=>handleChoiceSelection(choice)}
            />
            <input
              key={index}
              type="text"
              className="outline-none w-full"
              placeholder={`Choice ${index + 1}`}
              value={choice}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
            />
            <button onClick={() => removeOrder(index)}>
              <DeleteIcon className="text-base text-primary hover:text-primaryMedium duration-200" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between gap-3 mt-4">
        <EditButton
          icon={<ChoiceIcon />}
          onClick={addChoice}
          placeholder={'Add a choice'}
        />
        <EditButton
          icon={<QuestionIcon />}
          onClick={() => addAllQuiz()}
          placeholder={'Add question'}
        />
      </div>
    </div>
  );
};

export default QuestionAdder;
