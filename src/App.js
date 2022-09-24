import logo from './logo.svg';
import './App.css';
import HoursDone from './Components/HoursDone';
import HeaderBar from './Components/HeaderBar';
import Sidebar from './Components/Sidebar';
// import KanyeQuote from "./Components/KanyeQuote";

function App() {
  return (
    <div className='dashboard'>
      {/* <KanyeQuote></KanyeQuote> */}
      <HeaderBar></HeaderBar>
      <Sidebar></Sidebar>
      <HoursDone></HoursDone>
    </div>
  );
}

export default App;
