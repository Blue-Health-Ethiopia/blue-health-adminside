import React from 'react';

function Button({ placeholder, icon }) {
    return (
      <div>
        <button className="bg-primaryMedium hover:bg-primaryDark duration-150 rounded-lg p-3 text-white font-extralight capitalize tracking-[0.3rem] text-xs w-full">
                <div className='flex items-center w-full justify-between'>
                    {icon}
                    {placeholder}
                </div>
        </button>
      </div>
    );
}

export default Button;
