import React, { useState } from 'react';
import logo_1 from '../../assets/Logos/Blue Health Logo 1.png';
import logo_2 from '../../assets/Logos/LogoOnly.png';
import {
  DashboardIcon,
  LapTopIcon,
  LogoutIcon,
} from '../../assets/Icons/Icons';
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';
import MenuButton from '../features/MenuButton';

const SidePanel = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`fixed h-screen ${
        isExpanded ? 'w-1/6' : 'w-20'
      } bg-primary transition-all duration-300`}
    >
      <div className="h-full w-full p-3 flex flex-col items-center gap-16">
        <div className="flex items-center justify-center">
          <MenuButton isExpanded={isExpanded} togglePanel={togglePanel} />
        </div>
        {/* <img
          className={`w-44  transition-all duration-300 ${
            isExpanded ? 'h-auto' : 'h-12'
          }`}
          src={isExpanded ? logo_1 : logo_2}
          alt=""
        /> */}
        <div className="w-full h-0.5 bg-primaryMedium" />
        <div className="flex w-full flex-col justify-between h-full">
          <div className="flex flex-col gap-5">
            <Link to={'/'}>
              <Button
                icon={<DashboardIcon className="w-7 h-7" />}
                activeRoute={location.pathname === '/'}
                placeholder={isExpanded ? 'DASHBOARD' : null}
                isExpanded={isExpanded}
              />
            </Link>
            <Link to={'/virtualseminar'}>
              <Button
                icon={<LapTopIcon className="w-7 h-7" />}
                activeRoute={location.pathname === '/virtualseminar'}
                placeholder={isExpanded ? 'VIRTUAL \n SEMINARY' : null}
                isExpanded={isExpanded}
              />
            </Link>
          </div>
          <Link to={'#'}>
            <Button
              icon={<LogoutIcon className="w-7 h-7" />}
              placeholder={isExpanded ? 'LOGOUT' : null}
              isExpanded={isExpanded}
            />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SidePanel;
