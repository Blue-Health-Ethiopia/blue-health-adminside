import React from 'react';
import logo_1 from '../../assets/Logos/Blue Health Logo 1.png';
import { DashboardIcon, LapTopIcon } from '../../assets/Icons';
import Button from './Button';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <side className="fixed h-screen flex items-center justify-center bg-primary w-1/6">
      <div className="h-full w-full p-3 flex flex-col items-center gap-16">
        <img className="w-44 mt-14" src={logo_1} alt="" />
        <div className="w-full h-0.5 bg-primaryMedium" />
        <div className="flex w-full flex-col gap-6">
          <Link to={'/dashboard'}>
            <Button
              placeholder={'DASHBOARD'}
              icon={<DashboardIcon className="w-8 h-8" />}
            />
          </Link>
          <Link to={'/settings'}>
            <Button
              placeholder={'VIRTUAL \n SEMINARY'}
              icon={<LapTopIcon className="w-8 h-8" />}
            />
          </Link>
        </div>
      </div>
    </side>
  );
};

export default SidePanel;
