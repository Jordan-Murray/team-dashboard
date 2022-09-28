import './App.css';
import HoursDoneDashboard from './Components/HoursDoneDashboard';
import Sidebar from './Components/Sidebar';

function App() {

  return (
    <div className='dashboard'>
      <Sidebar></Sidebar>
      <HoursDoneDashboard></HoursDoneDashboard>
    </div>
  );
}

export default App;
