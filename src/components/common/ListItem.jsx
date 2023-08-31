import React from 'react';
import { ActiveIcon, LinkIcon, PeopleIcon } from '../../assets/Icons/Icons';
import { CopyButton } from './Button';
import { Link } from 'react-router-dom';

const ListItem = ({ title, activaState, people, date, image,id }) => {

  return (
    <Link to={`/virtualseminar/${id}`} className="w-full cursor-pointer hover:bg-backgroundDim duration-200 flex overflow-hidden bg-white h-36 rounded-md shadow-lg shadow-slate-200">
      <img className="object-cover w-1/6 overflow-hidden" src={image} alt="" />
      <div className="p-2 pl-8 space-y-3 w-full">
        <h1 className="font-bold capitalize text-lg tracking-widest">
           {title}
        </h1>
        <div className="w-full flex justify-between ">
          <div className="space-y-1">
            <span className="flex items-center gap-3">
              <ActiveIcon className={`${activaState==='Active'?'text-accent':'text-primary'} text-lg`} />
              <h1 className="font-bold text-primary tracking-widest">{activaState}</h1>
            </span>
            <span className="flex items-center gap-3">
              <PeopleIcon className="text-accent text-lg" />
              <h1 className="font-bold text-xs text-primary tracking-widest">{activaState==='Active'?people:'--'}</h1>
            </span>
            <h1 className="font-light pt-2 text-sm text-primaryMedium tracking-widest">
              {date}
            </h1>
          </div>
          <div className="flex items-start gap-10 pr-7">
            <CopyButton
              icon={<LinkIcon className="text-2xl" />}
              placeholder={'COPY LINK'}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
