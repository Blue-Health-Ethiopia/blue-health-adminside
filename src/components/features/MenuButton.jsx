import React from 'react'

const MenuButton = ({togglePanel,isExpanded}) => {
  return (
    <div>
      <button className="relative group" onClick={togglePanel}>
        <div
          className={`relative flex border-4 border-backgroundDim overflow-hidden items-center justify-center rounded-full w-[45px] h-[45px] transform transition-all bg-accent  duration-200 ${
            isExpanded ? 'translate-x-28' : 'translate-x-[40px] rotate-180'
          }`}
        >
          {' '}
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default MenuButton