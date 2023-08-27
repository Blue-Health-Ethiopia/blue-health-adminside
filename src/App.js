import Navbar from './components/common/Navbar';
import SidePanel from './components/common/SidePanel';
import { Route, Routes, useLocation } from 'react-router-dom';
import Settings from './pages/VirtualSeminar';
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();
  return (
    <>
      <SidePanel />
      <Navbar activeRoute={location.pathname} />
      <div className="absolute right-[5%] left-[20%] top-[22%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/virtualseminar" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
