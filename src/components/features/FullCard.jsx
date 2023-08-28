import React from 'react'
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const FullCard = () => {
  return (
    <div className="w-full h-44 rounded-md p-8 px-16 bg-white shadow-xl shadow-slate-200">
      <h1 className="font-bold text-2xl mb-2 text-black capitalize">
        Host your virtual event
      </h1>
      <div className="flex w-full justify-between items-end">
        <p className="w-1/4 capitalize text-black text-lg font-light">
          set up your online seminar in a few steps
        </p>
        <Link to={'/virtualseminar/create'}>
          <Button placeholder={'CREATE VIRTUAL SEMINAR'} />
        </Link>
      </div>
    </div>
  );
}

export default FullCard