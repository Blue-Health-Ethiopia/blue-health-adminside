import Navbar from './components/common/Navbar';
import SidePanel from './components/common/SidePanel';
import { Route, Routes, useLocation } from 'react-router-dom';
import Settings from './pages/VirtualSeminar';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';

function App() {
  const location = useLocation();
  const isExpanded = useSelector((state) => state.panel.isExpanded);
  return (
    <>
      <SidePanel />
      <Navbar isExpanded={isExpanded} activeRoute={location.pathname} />
      <div className={`absolute right-[5%] ${isExpanded?'left-[20%]':'left-[8%]'} top-[22%] duration-200`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/virtualseminar" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
