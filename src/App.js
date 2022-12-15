import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import MarketPlace from './Pages/MarketPlace';
import { useState } from 'react';
import Editorials from './Pages/Editorials';
import Drops from './Pages/Drops';

function App() {

  const [currentItem, setCurrentItem] = useState({})
  console.log(currentItem)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='marketplace' element={<MarketPlace 
            setCurrentItem={setCurrentItem}
          />}/>
          <Route path='editorials' element={<Editorials
            currentItem={currentItem}
          />}/>
          <Route path='/drop' element={<Drops />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
