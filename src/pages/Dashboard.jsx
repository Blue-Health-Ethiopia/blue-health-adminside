import React from 'react';
import Card from '../components/features/Card';

const Dashboard = () => {
  return (
    <div>
      <div className=" -top-16 flex-wrap gap-3 flex w-full right-0 left-0 justify-between">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
