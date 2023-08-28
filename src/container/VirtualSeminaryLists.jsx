import React from 'react';
import ListItem from '../components/common/ListItem';
import sample from '../assets/Sample Image.jpg';

const VirtualSeminaryLists = () => {
  function getCurrentDate() {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(currentDate.getFullYear()).slice(-2); // Last two digits of the year

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  const currentDate = getCurrentDate();
  const seminars = [
    {
      id: 1,
      title: 'Virtual Seminar-1',
      activeState: 'Active',
      people: '55',
      image: sample,
      date: currentDate,
    },
    {
      id: 2,
      title: 'Virtual Seminar-2',
      activeState: 'Active',
      people: '45',
      image: sample,
      date: currentDate,
    },
    {
      id: 3,
      title: 'Virtual Seminar-3',
      activeState: 'Inactive',
      people: 20,
      image: sample,
      date: currentDate,
    },
    {
      id: 4,
      title: 'Virtual Seminar-3',
      activeState: 'Inactive',
      people: 23,
      image: sample,
      date: currentDate,
    },
  ];
  return (
    <div className="overflow-y-scroll space-y-7 h-[40rem] py-8 scrollbar-thin scrollbar-track-backgroundDim scrollbar-thumb-primary ">
      {seminars.map((seminar) => (
          <ListItem
          key={seminar.id}
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
