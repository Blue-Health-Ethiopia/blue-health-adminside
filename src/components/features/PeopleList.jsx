import React from "react"
import { PeopleIcon } from "../../assets/Icons/Icons";
import { useNavigate } from "react-router-dom";

export const PeopleList = ({ seminar }) => {
  const navigate = useNavigate()
  
  const handleViewMore = () => {
    navigate('/participants', { state: { seminarData: seminar } });
  }
    return (
      <div className="w-3/4 h-fit pb-4 bg-white rounded-md shadow-lg shadow-slate-200">
        <div className="p-3 flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <PeopleIcon className="text-primaryMedium" />{' '}
            <p className="font-bold text-sm text-primary">{seminar.peoples.length}</p>
          </div>
          <p
            onClick={()=>handleViewMore()}
            className="text-xs cursor-pointer font-bold text-primary hover:text-primaryMedium duration-200"
          >
            View More
          </p>
        </div>
        <div className="h-1 w-full bg-backgroundDim" />
        <div className="h-64 overflow-y-scroll scrollbar-thin">
          {seminar.peoples.map((person) => (
            <>
              <div className="p-3 flex items-center gap-4">
                <div className="bg-primary w-10 h-10 rounded-full">
                  <img className="w-full h-full object-cover rounded-full" src={person.image} alt="" />
                </div>
                <div>
                  <h1 className="font-bold text-xs tracking-widest">{person.participant}</h1>
                  <p className="font-light text-primaryMedium text-xs">{person.date}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
}