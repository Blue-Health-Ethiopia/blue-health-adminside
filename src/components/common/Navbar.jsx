import React from 'react';
import admin from '../../assets/Admin.png';

const Navbar = () => {
  return (
    <div className="relative -z-30 w-full h-52 bg-backgroundDim">
      <nav class="absolute right-[5%] left-[20%] top-[20%]">
        <div className="flex flex-col w-full justify-start h-full gap-8">
          <h1 className="font-light tracking-[0.2rem] text-sm text-black">
            ADMIN PANEL
          </h1>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl tracking-[0.3rem]">DASHBOARD</h1>
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
