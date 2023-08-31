import React from 'react';
import admin from '../../assets/Admin.png';
import { CopyButton } from './Button';
import { UploadIcon } from '../../assets/Icons/Icons';

const Navbar = ({ activeRoute, isExpanded }) => {
  return (
    <div className="relative w-full h-52 bg-backgroundDim">
      <nav
        className={`absolute right-[5%] ${
          isExpanded ? 'left-[21%]' : 'left-[9%]'
        } top-[12%] duration-200`}
      >
        <div className="flex flex-col w-full justify-start h-full gap-8">
          <div className="flex w-full justify-between">
            <h1 className="font-light tracking-[0.2rem] text-sm text-black">
              ADMIN PANEL
            </h1>
            <CopyButton
              placeholder={'Upload Excel'}
              icon={<UploadIcon className="w-5 h-5" />}
            />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl tracking-[0.3rem]">
              {activeRoute === '/'
                ? 'DASHBOARD'
                : activeRoute === '/virtualseminar'
                ? 'VIRTUAL SEMINARIES'
                : activeRoute === `/virtualseminar/create`
                ? 'CREATE VIRTUAL SEMINAR'
                : activeRoute === `/quiz`
                ? 'QUIZ'
                : ''}
            </h1>
            <div className="flex items-center justify-center text-end gap-3">
              <div>
                <h1 className="text-sm font-semibold text-black tracking-[0.2rem]">
                  Admin
                </h1>
                <p className="text-xs text-primaryMedium tracking-[0.2rem]">
                  admin@gmail.com
                </p>
              </div>
              <img src={admin} className="w-14" alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
