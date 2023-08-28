import React from 'react';
import DashboardContainer from '../container/DashboardContainer';

const Dashboard = () => {
  return (
    <div>
      <div className=" -top-16 flex-wrap gap-3 flex w-full right-0 left-0 justify-between">
        <DashboardContainer/>
      </div>
    </div>
  );
};

export default Dashboard;
