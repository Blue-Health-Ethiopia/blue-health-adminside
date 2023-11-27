import { CorrectIcon, SearchIcon } from '../../assets/Icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addHighlightedWord, editInput, removeHighlightedWord, toggleEditing } from '../../redux/actions';

export const TextInput = ({placeholder,icon,onChange}) => {
  return (
    <div className="bg-white  flex items-center gap-2 w-72 p-2 text-xs rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-30">
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

export  const HighlightInput = ({icon,placeholder}) => {
  const highlightedWords = useSelector((state) => state.highlightedwords);
  const dispatch = useDispatch();

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputValue = event.target.value.trim();
      if (highlightedWords.length < 3 && inputValue !== '') {
        dispatch(addHighlightedWord(inputValue));
        event.target.value = '';
      }
    }
  };

  const handleRemoveWord = (word) => {
    dispatch(removeHighlightedWord(word));
  };

  return (
    <div className="flex flex-col items-start gap-3 duration-200">
      <h1 className="text-xs ml-1 font-bold capitalize text-primaryMedium">
        {highlightedWords.length === 0 ? (
          'add 3 Occupations'
        ) : highlightedWords.length === 1 ? (
          'add 2 more occupations'
        ) : highlightedWords.length === 2 ? (
          'add 1 more occupations'
        ) : (
          <span className="flex items-center gap-2">
            <h1>you're all set</h1>
            <CorrectIcon />
          </span>
        )}
      </h1>
      <div className="bg-white flex items-center gap-2 w-fit p-2 text-sm rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-30">
        <div className="text-primaryMedium">{icon}</div>{' '}
        {highlightedWords.length < 3 && (
          <>
            <input
              className="outline-none py-1 tracking-wider ml-2 w-full"
              type="text"
              placeholder={placeholder}
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
              onClick={() => handleRemoveWord(word)}
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
    <div className="bg-white  flex items-center gap-2 w-2/3 p-2 text-sm rounded-md font-light focus ring-primaryMedium ring-1 ring-opacity-30">
      <div className="text-primaryMedium">{icon}</div>
      <input
        className="outline-none tracking-wider py-1 ml-2 w-full"
        type="number"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};



export const EditableInput = ({ icon }) => {
  const { isEditing, initialText } = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(editInput(e.target.value));
  };

  const handleToggleEdit = () => {
    dispatch(toggleEditing());
  };

  return (
    <div
      className={`flex capitalize items-center text-start justify-between gap-2 w-2/3 p-1 h-full px-3 rounded-md font-light  ${
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
      <button onClick={handleToggleEdit}>
        <CorrectIcon className="text-accent" />
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

