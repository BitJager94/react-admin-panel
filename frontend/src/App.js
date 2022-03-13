import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import IPGeo from './components/IP/IPGeo';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="ipgeo" element={<IPGeo/>}/>
        <Route path="charts" element={<Charts/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
