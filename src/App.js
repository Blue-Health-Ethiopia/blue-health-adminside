import Navbar from './components/common/Navbar';
import SidePanel from './components/common/SidePanel';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import VirtualSeminar from './pages/VirtualSeminar';
import CreateSeminar from './pages/CreateSeminar';
import SeminarDetail from './pages/SeminarDetail';
import Peoples from './pages/Peoples';

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
          <Route path="/virtualseminar" element={<VirtualSeminar />} />
          <Route path="/virtualseminar/create" element={<CreateSeminar />} />
          <Route path="/virtualseminar/:seminarID" element={<SeminarDetail />} />
          <Route path="/participants" element={<Peoples />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
