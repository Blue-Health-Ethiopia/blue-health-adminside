import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom';
import Login from './Component/Loginpage/login';
import Nav from './Component/Navbar/Nav';
import Register from './Component/Register/Register';
import Dashboard from './Component/Dashboard/Dashboard';
import NewsFeed from './Component/NewsFeed/NewsFeed';
import SummerRegister from './Component/Register/SummerRegister';

function App() {
  return (
    <div className="bg-background overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Nav />}>
            <Route index element={<Dashboard />} />
            <Route path="register" element={<SummerRegister/>} />
            <Route path="newsfeed" element={<NewsFeed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
