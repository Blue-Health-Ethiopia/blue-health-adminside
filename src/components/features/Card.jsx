import React from 'react';
import vs from '../../assets/Virtual Seminary.png'

const Card = () => {
  return (
    <div className="bg-white m-3 relative w-[30rem] h-64 rounded-md overflow-hidden shadow-2xl shadow-slate-200">
      <div className="w-56 h-56 bg-primaryMedium opacity-5 absolute z-50 -top-20 -right-12 rounded-full" />
      <div className="w-60 h-60 bg-accent opacity-5 absolute z-50 -bottom-24 -left-14 rounded-full" />
      <div className="w-full text-end font-light p-3 tracking-[0.3rem]">
        VIRTUAL <br />
        <span className="font-bold text-primary">SEMINARIES</span>{' '}
        <div className='flex items-center'>
          {' '}
         <img src={vs} className='w-14 mr-5' alt="" /> <div className="w-full h-[0.2px] bg-primaryMedium" />
        </div>
      </div>
    </div>
  );
};

export default Card;
