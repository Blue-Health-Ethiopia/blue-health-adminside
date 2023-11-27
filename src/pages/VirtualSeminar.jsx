import React from 'react';
import FullCard from '../components/features/FullCard';
import VirtualSeminaryLists from '../container/Virtual Seminar/VirtualSeminaryLists';

const VirtualSeminar = () => {
 
  return (
    <div className="flex flex-col gap-4">
      <FullCard />
      <div className="w-full flex justify-between items-end text-start mt-10">
        <div className="space-y-2">
          <h1 className="capitalize font-extrabold text-lg text-start tracking-widest">
            Recently
            <br />
            <span className="font-light text-primaryMedium">Created</span>
          </h1>
          <div className="w-32 h-[0.2px] text-start bg-primaryMedium" />
        </div>
        <h1 className="font-bold text-primary">See all</h1>
      </div>
        <VirtualSeminaryLists/>
    </div>
  );
};

export default VirtualSeminar;
