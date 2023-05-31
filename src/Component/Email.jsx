import React, { useState, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import ModelTemplate from './ModelTemplate';
import logo from '../Assets/Logo Transparent 3.ad0fc73c01fba69c2899.png';

const Email = ({ isOpen, isClose }) => {
  return (
    <div className="">
      <ModelTemplate isOpen={isOpen} onClose={isClose}>
        <div className="flex space-x-32">
          <AiFillCloseCircle
            onClick={isClose}
            className="text-3xl cursor-pointer hover:text-secondary"
          />
          <img src={logo} alt="" className="w-44" />
        </div>

        <form action="" className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Email address"
            className="border-b-2 border-secondary outline-none w-80 mt-6 p-1 hover:border-primary focus:border-primary "
          />
          <input
            type="text"
            placeholder="Subject"
            className="border-b-2 border-secondary outline-none w-80 mt-6 p-1 hover:border-primary focus:border-primary "
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Text Massage"
            className="border-b-2 border-secondary outline-none w-80 mt-6 p-1 hover:border-primary focus:border-primary "
          />
          <button className="p-1 w-32 mt-4 border-2 text-primary font-semibold hover:bg-primary hover:text-white">
            Send Email
          </button>
        </form>
      </ModelTemplate>
    </div>
  );
};

export default Email;
