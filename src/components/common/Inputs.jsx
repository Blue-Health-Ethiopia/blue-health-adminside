import React, { useState } from 'react';
import { CorrectIcon, EditIcon, SearchIcon } from '../../assets/Icons/Icons';

export const TextInput = ({placeholder,icon,onChange}) => {
  return (
    <div className="bg-white  flex items-center gap-2 w-2/3 p-3 rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-30">
      <div className="text-primaryMedium">{icon}</div>
      <input
        className="outline-none tracking-wider py-1 ml-2 w-full"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export  const HighlightInput = ({icon,placeholder,highlightedWords,setHighlightedWords}) => {
  const [inputValue, setInputValue] = useState('');
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
      <div className="bg-white flex items-center gap-2 w-fit p-3 rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-30">
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

export const CEUInput = ({ placeholder, icon,onChange }) => {
 return (
    <div className="bg-white  flex items-center gap-2 w-2/3 p-3 rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-30">
      <div className="text-primaryMedium">{icon}</div>
      <input
        className="outline-none tracking-wider py-1 ml-2 w-full"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};



export const EditableInput = ({
  icon,
  isEditing,
  initialText,
  toggleEdit,
  onChange
}) => {
  return isEditing ? (
    <div
      className={`flex capitalize items-center justify-between gap-2 w-2/3 p-1 h-full px-3 rounded-md font-light  ${
        isEditing ? '  border-b border-accent' : 'ring-0 '
      }`}
    >
      <div
        className={`${
          isEditing ? 'text-accent animate-pulse' : 'text-primary'
        }`}
      >
        {icon}
      </div>
      {isEditing ? (
        <input
          className="outline-none capitalize bg-transparent tracking-wider py-1 ml-2 w-full"
          type="text"
          value={initialText}
          onChange={onChange}
        />
      ) : (
        <span>{initialText}</span>
      )}{' '}
      <button onClick={toggleEdit}>
        <CorrectIcon className="text-accent" />
      </button>
    </div>
  ) : (
    <div
      className={`flex capitalize items-center justify-between font-bold text-primary tracking-widest gap-2 w-2/3 p-1 h-full px-3 rounded-md  ${
        isEditing ? 'border-b border-accent' : 'ring-0 '
      }`}
    >
      {' '}
      <div
        className={`${
          isEditing ? 'text-accent animate-pulse' : 'text-primaryMedium'
        } flex items-center gap-3`}
      >
        {icon}
        <span className='text-primary'>{initialText}</span>
      </div>
      <button onClick={toggleEdit}>
        <EditIcon className="text-primaryMedium" />
      </button>
    </div>
  );
};

export const SearchInput = ({ onChange }) => {
  return (
    <div className="flex items-center bg-background rounded-md p-3">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow bg-transparent outline-none px-2"
        onChange={onChange}
      />
      <SearchIcon className="text-lg text-primary" />
    </div>
  );
};

