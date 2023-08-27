import React from 'react';
import logo_1 from '../../assets/Logos/Blue Health Logo 1.png';
import { DashboardIcon, LapTopIcon, LogoutIcon } from '../../assets/Icons/Icons';
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';

const SidePanel = () => {
  const location = useLocation();
  return (
    <side className="fixed h-screen flex items-center justify-center bg-primary w-1/6">
      <div className="h-full w-full p-3 flex flex-col items-center gap-16">
        <img className="w-44 mt-14" src={logo_1} alt="" />
        <div className="w-full h-0.5 bg-primaryMedium" />
        <div className="flex w-full flex-col justify-between h-full">
          <div className="flex flex-col gap-5">
            {' '}
            <Link to={'/'}>
              <Button
                placeholder={'DASHBOARD'}
                icon={<DashboardIcon className="w-7 h-7" />}
                activeRoute={location.pathname === '/'}
              />
            </Link>
            <Link to={'/settings'}>
              <Button
                placeholder={'VIRTUAL \n SEMINARY'}
                icon={<LapTopIcon className="w-7 h-7" />}
                activeRoute={location.pathname === '/settings'}
              />
            </Link>
          </div>
          <Link to={'#'}>
            <Button
              placeholder={'LOGOUT'}
              icon={<LogoutIcon className="w-7 h-7" />}
            />
          </Link>
        </div>
      </div>
    </side>
  );
};

export default SidePanel;
