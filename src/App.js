import logo from './logo.svg';
import './App.css';
import HoursDone from './Components/HoursDone';
import Sidebar from './Components/Sidebar';
import HeaderBar from './Components/HeaderBar';

// import KanyeQuote from "./Components/KanyeQuote";

function App() {

  const handleEvent = () => {
    alert("I was clicked");
  };

  const getData = (data) => {
    alert(data);
  }

  return (
    <div className='dashboard'>
      {/* <KanyeQuote></KanyeQuote> */}
      <HeaderBar onPress={getData}></HeaderBar>
      <Sidebar></Sidebar>
      <HoursDone></HoursDone>
    </div>
  );
}

export default App;
