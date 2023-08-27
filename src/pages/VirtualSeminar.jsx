import React from 'react';
import FullCard from '../components/features/FullCard';
import ListItem from '../components/common/ListItem';

const VirtualSeminar = () => {
  const seminars = [
    {
      title: "Virtual Seminar",
    },
    {
      title: "Virtual Seminar",
    },
    {
      title: "Virtual Seminar",
    },
    {
      title: "Virtual Seminar",
    },
  ]
  return (
    <div className="flex flex-col gap-4">
      <FullCard />
      <div className="w-full flex justify-between items-end text-start mt-10">
        <div className="space-y-2">
          <h1 className="capitalize font-extrabold text-base text-start tracking-widest">
            Recently
            <br />
            <span className="font-light text-primaryMedium">Created</span>
          </h1>
          <div className="w-32 h-[0.2px] text-start bg-primaryMedium" />
        </div>
        <h1 className="font-bold text-primary">See all</h1>
      </div>
      <div className='overflow-y-scroll space-y-7 h-96 py-8 scrollbar-thin scrollbar-track-backgroundDim scrollbar-thumb-primary'>
        {seminars.map((seminar) => (
          <ListItem />
        ))}
      </div>
    </div>
  );
};

export default VirtualSeminar;
