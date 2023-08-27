import React from 'react';

function Button({ placeholder, icon,activeRoute,isExpanded }) {
  return (
    <div>
      <button className={` text-end hover:bg-primaryLight ${activeRoute?'bg-primaryMedium':'bg-primaryDark'} duration-150 rounded-lg p-3 text-white font-extralight capitalize tracking-[0.3rem] text-xs w-full`}>
        <div className={`flex items-center w-full ${isExpanded?'justify-between':'justify-center'}`}>
         <div className={`${activeRoute?'opacity-100':'opacity-40'}`}> {icon}</div>
          {placeholder}
        </div>
      </button>
    </div>
  );
}

export default Button;
