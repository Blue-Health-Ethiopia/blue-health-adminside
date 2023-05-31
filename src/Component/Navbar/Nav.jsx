import React from 'react';
import logo from '../../Assets/Logo Transparent 3.ad0fc73c01fba69c2899.png';
import {
  AiOutlineDashboard,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineSetting,
} from 'react-icons/ai';
import { BiNews, BiFile } from 'react-icons/bi';
import { useNavigate, Outlet } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handelenavigation = (route) => {
    navigate(route);
  };

  const menu = [
    { title: 'Dashboard', icon: AiOutlineDashboard, route: '/dash' },
    { title: 'Register', icon: AiOutlineUser, route: 'register' },
    { title: 'NewsFeed', icon: BiNews, route: 'newsfeed' },
    { title: 'Blog poster', icon: AiOutlineBook, route: 'blog' },
    { title: 'Report', icon: BiFile, route: 'report' },
    { title: 'Setting', icon: AiOutlineSetting, route: 'setting' },
  ];
  return (
    <div className="bg-background flex fixed h-screen">
      <div className=" bg-white p-3 w-72">
        <img src={logo} alt="" className="w-56" />
        <div className="m-2 space-y-2">
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={() => handelenavigation(item.route)}
              className="flex p-2 space-x-12 items-center rounded-md hover:bg-background active:bg-background focus:bg-background cursor-pointer"
            >
              <item.icon className="text-secondary text-2xl" />
              <h2 className="text-lg font-medium text-primary">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
