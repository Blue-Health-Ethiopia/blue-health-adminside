import Navbar from "./components/common/Navbar";
import SidePanel from "./components/common/SidePanel";
import Container from "./container/Container";

function App() {
  return (
    <>
      <SidePanel />
      <Navbar/>
      <Container/>
    </>
    // <div className="font-light flex-col text-black text-xl gap-5 text-center h-screen flex justify-center items-center overflow-hidden">
    //   <Loading />
    //   <h1>
    //     BLUE HEALTH <span className="font-semibold text-primaryMedium">ADMIN PANEL</span>
    //   </h1>
    //   <h2>Coming Soon...</h2>
    // </div>
  );
}

export default App;
