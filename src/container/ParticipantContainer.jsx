import React, { useState } from 'react';
import { EmailIcon, PeopleIcon } from '../assets/Icons/Icons';
import { SearchInput } from '../components/common/Inputs';
import { EditButton } from '../components/common/Button';

const ParticipantContainer = ({ seminar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredParticipants = seminar.peoples.filter((person) =>
    person.participant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="w-full mb-5 mt-4 h-fit bg-white rounded-md shadow-lg shadow-slate-200">
        <div className="p-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <PeopleIcon className="text-primaryMedium" />
            <p className="font-bold text-sm text-primary">
              {filteredParticipants.length}
            </p>
          </div>
          <SearchInput onChange={handleSearchInputChange} />
        </div>
        <div className="h-1 w-full bg-backgroundDim" />
        {filteredParticipants.map((person) => (
          <>
            <div className="p-3 py-6 flex items-center justify-between  cursor-pointer hover:bg-slate-100 duration-200">
              <div className="flex items-center gap-4">
                <div className="bg-primary w-10 h-10 rounded-full">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={person.image}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xs tracking-widest">
                    {person.participant}
                  </h1>
                  <p className="font-light text-primaryMedium text-xs">
                    {person.date}
                  </p>
                </div>
              </div>
              <EditButton
                icon={<EmailIcon className="text-base" />}
                placeholder={'Resend Email'}
              />
            </div>
            <div className="w-full h-[1px] bg-background" />
          </>
        ))}
      </div>
    </>
  );
};

export default ParticipantContainer;
