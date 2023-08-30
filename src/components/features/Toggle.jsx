import { useState } from 'react';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex w-fit items-center space-x-4 cursor-pointer">
      <div
        className={`w-10 h-5 flex items-center rounded-full transition ${
          isChecked ? 'bg-accent' : 'bg-backgroundDim'
        }`}
      >
        <div
          className={`w-4 h-4 transform transition rounded-full ${
            isChecked ? 'translate-x-5' : 'translate-x-1'
          } ${isChecked ? 'bg-primary' : 'bg-primaryMedium'}`}
        />
      </div>
      <span className="text-primary text-xs capitalize font-bold">
        {isChecked ? 'ACTIVE' : 'INACTIVE'}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
    </label>
  );
};

export default Toggle;
