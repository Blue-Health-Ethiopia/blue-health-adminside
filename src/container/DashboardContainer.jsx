import React from 'react'
import vs_1 from '../assets/Icons/Vs-1.png';
import person from '../assets/Icons/Person.png';
import ceu from '../assets/Icons/CEU.png';
import Card from '../components/features/Card';

const DashboardContainer = () => {
    const data = [
      {
        id: 1,
        title: 'SEMINARS',
        value: 100,
        icon: vs_1,
      },
      {
        id: 2,
        title: 'USERS',
        value: 500,
        icon: person,
      },
      {
        id: 3,
        title: 'CEU',
        value: 52,
        icon: ceu,
      },
    ];
  return (
    <div>
      <Card data={data}/>
    </div>
  )
}

export default DashboardContainer