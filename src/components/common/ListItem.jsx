import React from 'react';
import sample from '../../assets/Sample Image.jpg';
import { ActiveIcon, LinkIcon, PeopleIcon } from '../../assets/Icons/Icons';
import { CopyButton } from './Button';

const ListItem = () => {
  function getCurrentDate() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(currentDate.getFullYear()).slice(-2); // Last two digits of the year

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  const currentDate = getCurrentDate();

  return (
    <div className="w-full cursor-pointer hover:bg-backgroundDim duration-200 flex overflow-hidden bg-white h-36 rounded-md shadow-lg shadow-slate-200">
      <img
        className="object-cover w-1/6 overflow-hidden"
        src={sample}
        alt=""
      />
      <div className="p-2 pl-8 space-y-3 w-full">
        <h1 className="font-extrabold capitalize text-xl tracking-widest">
          Virtual Seminar-1
        </h1>
        <div className="w-full flex justify-between ">
          <div className="space-y-1">
            <span className="flex items-center gap-3">
              <ActiveIcon className="text-accent text-lg" />
              <h1 className="font-bold text-primary tracking-widest">Active</h1>
            </span>
            <span className="flex items-center gap-3">
              <PeopleIcon className="text-accent text-lg" />
              <h1 className="font-bold text-primary tracking-widest">52</h1>
            </span>
            <h1 className="font-bold pt-2 text-sm text-primaryMedium tracking-widest">
              {currentDate}
            </h1>
          </div>
          <div className='flex items-start gap-10 pr-7'>
            <CopyButton icon={<LinkIcon className='text-2xl'/>} placeholder={'COPY LINK'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
