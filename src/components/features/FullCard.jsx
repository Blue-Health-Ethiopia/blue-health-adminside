import React from 'react'
import Button from '../common/Button';

const FullCard = () => {
  return (
    <div className="w-full h-44 rounded-md p-8 px-16 bg-white shadow-xl shadow-slate-200">
      <h1 className="font-bold text-2xl mb-2 text-black capitalize">
        Host your virtual event
      </h1>
      <div className='flex w-full justify-between items-end'>
        <p className="w-1/4 capitalize text-black text-lg font-light">
          set up your online seminar in a few steps
        </p>
        <Button placeholder={'CREATE VIRTUAL SEMINAR'}/>
      </div>
    </div>
  );
}

export default FullCard