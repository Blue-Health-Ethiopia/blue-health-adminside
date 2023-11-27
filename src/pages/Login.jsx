import React from 'react'
import LoginContainer from '../container/Login/LoginContainer'

const Login = () => {
  return (
      <div className='absolute h-screen flex items-center justify-center bg-slate-950 w-full bg-opacity-60 z-[10000]'>
          <LoginContainer/>
      </div>
  )
}

export default Login