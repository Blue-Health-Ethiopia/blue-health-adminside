import React, { useState } from 'react';
import { EditButton } from '../../components/common/Button';
import { ChoiceIcon, DeleteIcon, QuestionIcon } from '../../assets/Icons/Icons';

const QuestionAdder = () => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]); // Initial state with two empty choices

  const handleChoiceChange = (index, choice) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = choice;
    setChoices(updatedChoices);
  };

    const addChoice = () => {
    if(choices.length<6)
    {setChoices([...choices, '']);}
    };
    
    const removeOrder = (index) => {
      if (choices.length === 0) {
        alert('You must have at least one order.');
        return;
      } else {
        const newOrders = [...choices];
        newOrders.splice(index, 1);
        setChoices(newOrders);
      }
    };

  return (
    <div className="bg-background w-1/2 p-6 rounded-md">
      <div className="mb-6">
        <h2 className="text-base tracking-wide font-semibold mb-2">
          Add a Question
        </h2>
        <textarea
          rows={4}
          className="w-full p-2 text-sm rounded-md outline-none border border-backgroundDim"
          placeholder="Enter your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <h2 className="text-base tracking-wide font-semibold mb-2">
          Add Choices
        </h2>
        {choices.map((choice, index) => (
          <div className="w-full bg-white flex items-center gap-3 text-sm p-3 rounded-md mb-2 outline-none border border-backgroundDim">
            <input
              key={index}
              type="text"
              className="outline-none w-full"
              placeholder={`Choice ${index + 1}`}
              value={choice}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
            />
            <button onClick={()=>removeOrder(index)}><DeleteIcon className='text-base text-primary hover:text-primaryMedium duration-200'/></button>
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
          onClick={null}
          placeholder={'Add question'}
        />
      </div>
    </div>
  );
};

export default QuestionAdder;
