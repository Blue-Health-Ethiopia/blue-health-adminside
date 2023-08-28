import React from 'react';
import vs from '../../assets/Virtual Seminary.png';


const Card = ({data}) => {
  
  return (
    <div className="bg-white m-3 relative w-[30rem] h-80 rounded-md overflow-hidden shadow-2xl shadow-slate-200">
      <div className="w-56 h-56 bg-primaryMedium opacity-5 absolute z-50 -top-20 -right-12 rounded-full" />
      <div className="w-80 h-80 bg-accent opacity-10 absolute z-50 -bottom-32 -left-32 rounded-full" />
      <div className="w-full text-end font-light p-3 tracking-[0.3rem]">
        VIRTUAL <br />
        <span className="font-bold text-primary text-xl">
          SEMINARIES
        </span>{' '}
        <div className="flex items-center">
          {' '}
          <img src={vs} className="w-14 mr-5" alt="" />{' '}
          <div className="w-full h-[0.2px] bg-primaryMedium" />
        </div>
        <div className="flex p-10 gap-20 w-full justify-center items-center">
          {data.map((data) => (
            <div key={data.id} className="flex flex-col w-full justify-center items-center gap-3">
              <img className="w-12" src={data.icon} alt="" />
              <h1 className="text-xs w-20 text-center">{data.title}</h1>
              <h2 className="font-extrabold tracking-tight text-xl text-center w-20 text-primary">
                {data.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
