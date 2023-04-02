import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import BuyEstate from './Pages/BuyEstate';
import SellEstate from './Pages/SellEstate';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/buy' element={<BuyEstate />} ></Route>
          <Route exact path='/sell' element={<SellEstate />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
