import React from 'react';
import ListItem from '../components/common/ListItem';
import { useSelector } from 'react-redux';

const VirtualSeminaryLists = () => {
  const seminars=useSelector(state=>state.seminars.seminars)

  return (
    <div className="overflow-y-scroll space-y-7 h-[40rem] py-8 scrollbar-thin scrollbar-track-backgroundDim scrollbar-thumb-primary ">
      {seminars.map((seminar) => (
          <ListItem
          key={seminar.id}
          id={seminar.id}
          title={seminar.title}
          activaState={seminar.activeState}
          date={seminar.date}
          image={seminar.image}
          people={seminar.people}
        />
      ))}
    </div>
  );
};

export default VirtualSeminaryLists;
