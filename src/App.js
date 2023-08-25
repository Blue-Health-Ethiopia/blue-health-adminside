import Navbar from './components/common/Navbar';
import SidePanel from './components/common/SidePanel';
import { Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <SidePanel />
      <Navbar />
      <div className="absolute right-[5%] left-[20%] top-[22%]">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
