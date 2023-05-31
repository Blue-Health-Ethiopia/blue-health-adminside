import { useState } from 'react';
import logo from '../../Assets/Logo Transparent 3.ad0fc73c01fba69c2899.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="h-screen w-auto bg-background flex justify-center items-center">
      <div className="bg-white p-7">
        <div className="flex space-x-16">
          <img src={logo} alt="" className="w-52" />
          <h1 className="text-2xl mt-3 text-primary">Admin Panel</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col pl-7 pr-7 mt-3 align-middle"
        >
          <input
            type="text"
            placeholder="Username"
            className="border-b-2 focus:border-primary border-secondary p-1  outline-none text-primary"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="border-b-2 focus:border-primary border-secondary p-1 mt-6 outline-none text-primary"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border-2 font-bold text-xl text-primary transition-all mt-9 m-3 border-primary h-10 hover:bg-primary hover:border-none hover:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
