import React, { useState } from 'react';
import { CorrectIcon } from '../../assets/Icons/Icons';

export const TextInput = ({placeholder,icon}) => {
  return (
    <div className="bg-white  flex items-center gap-2 w-2/3 p-3 rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-10">
      <div className="text-primaryMedium">{icon}</div>
      <input
        className="outline-none tracking-wider py-1 ml-2 w-full"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export  const HighlightInput = ({icon,placeholder}) => {
  const [inputValue, setInputValue] = useState('');
  const [highlightedWords, setHighlightedWords] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (highlightedWords.length < 3 && inputValue.trim() !== '') {
        setHighlightedWords([...highlightedWords, inputValue.trim()]);
        setInputValue('');
      }
    }
  };
    const handleRemoveWord = (index) => {
      const updatedWords = [...highlightedWords];
      updatedWords.splice(index, 1);
      setHighlightedWords(updatedWords);
    };


  return (
    <div className="flex flex-col items-start gap-3 duration-200">
      <h1 className="text-xs ml-1 font-bold capitalize text-primaryMedium">
        {highlightedWords.length === 0
          ? 'add 3 Occupations'
          : highlightedWords.length === 1
          ? 'add 2 more occupations'
          : highlightedWords.length === 2
          ? 'add 1 more occupations'
          : <span className='flex items-center gap-2'><h1>you're all set</h1><CorrectIcon/></span>}
      </h1>
      <div className="bg-white flex items-center gap-2 w-fit p-3 rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-10">
        <div className="text-primaryMedium">{icon}</div>{' '}
        {highlightedWords.length < 3 && (
          <>
            <input
              className="outline-none py-1 tracking-wider ml-2 w-full"
              type="text"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
          </>
        )}
        <h1 className="text-sm font-bold text-primaryMedium">
          {highlightedWords.length}
        </h1>
      </div>
      <div className="flex items-start gap-3 space-x-1">
        {highlightedWords.map((word, index) => (
          <div
            key={index}
            className="bg-backgroundDim shadow-lg shadow-slate-200 font-light tracking-widest text-primary capitalize text-sm  w-fit px-2 py-1 rounded-md flex items-start gap-3"
          >
            <span>{word}</span>
            <button
              onClick={() => handleRemoveWord(index)}
              className="text-primary hover:text-accent opacity-50"
            >
              &#10005;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CEUInput = ({ placeholder, icon }) => {
  return (
    <div className="bg-white  flex items-center gap-2 w-fit p-3 rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-10">
      <div className="text-primaryMedium">{icon}</div>
      <input
        className="outline-none tracking-wider py-1 ml-2 w-fit"
        type="number"
        step="any" // Allows both integers and floating-point numbers
        placeholder={placeholder}
      />
    </div>
  );
};

