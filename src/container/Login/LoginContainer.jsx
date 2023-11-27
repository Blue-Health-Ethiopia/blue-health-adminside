import React from 'react'
import circleLogo from '../../assets/Logos/Logo Circle.png'
import PersonIcon from '../../assets/Icons/Person.png'
import { TextInput } from '../../components/common/Inputs'
import Button from '../../components/common/Button'

const LoginContainer = () => {
  return (
    <div className="bg-background flex flex-col gap-5 items-center rounded-md px-10 p-6">
      <img className="w-12 m-2" src={circleLogo} alt="" />
      <div className="flex flex-col items-center">
        <h1 className="text-lg text-black font-semibold">
          Blue Health Ethiopia Admin Panel
        </h1>
        <p className="text-primaryMedium font-light capitalize">Login to proceed!</p>
      </div>
      <div className="space-y-5 mb-8">
        <TextInput
          placeholder={'Username'}
          icon={<img className="w-6" src={PersonIcon} alt="" />}
        />
        <TextInput
          placeholder={'Password'}
          icon={<img className="w-6" src={PersonIcon} alt="" />}
        />
        <span className="flex px-0.5 items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-primaryDark" htmlFor="">
              Show Password
            </label>
          </div>
          <p className="font-semibold text-primaryMedium cursor-pointer hover:text-primaryDark duration-150">
            Reset password !
          </p>
        </span>
      </div>
      <Button placeholder={'Login'} />
    </div>
  );
}

export default LoginContainer