import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './users/AddEmployee';
import EditEmployee from './users/EditEmployee';
import ViewEmployee from './users/ViewEmployee';
import Reward from './users/Reward';
import EmploeeTable from './users/EmploeeTable';
import PerformanceResult from './users/PerformanceResult';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/rewardreact" element={<Reward/>}/>
        <Route exact path="/employeetablereact" element={<EmploeeTable/>}/>
        <Route exact path="/performance" element={<PerformanceResult/>}/>
        <Route exact path="/addemployee" element={<AddEmployee/>}/>
        <Route exact path="/editemployee/:id" element={<EditEmployee/>}/>
        <Route exact path="/viewemployee/:id" element={<ViewEmployee/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
