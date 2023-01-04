import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import MarketPlace from './Pages/MarketPlace';
import { useState } from 'react';
import Editorials from './Pages/Editorials';
import Drops from './Pages/Drops';
import Cart from './Pages/Cart';
import ShippingDetails from './Pages/ShippingDetails';
import PaymentDetails from './Pages/PaymentDetails';
import Auctions from './Pages/Auctions';
import LiveAuction from './Pages/LiveAuction';
import Thanks from './Pages/Thanks';

function App() {

  const [currentItem, setCurrentItem] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartItems={cartItems}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/marketplace' element={<MarketPlace 
            setCurrentItem={setCurrentItem}
          />}/>
          <Route path='editorials' element={<Editorials
            currentItem={currentItem}
            setCartItems={setCartItems}
            cartItems={cartItems}
            setTotal={setTotal}
            setCurrentItem={setCurrentItem}
            total={total}
          />}/>
          <Route path='/drop' element={<Drops />} />
          <Route path='/auctions' element={<Auctions />} />
          <Route path='cart' element={<Cart 
            cartItems={cartItems}
            setCartItems={setCartItems}
            setTotal={setTotal}
            total={total}
          />} />
          <Route path='/shippingdetails' element={<ShippingDetails 
            cartItems={cartItems}
            setCartItems={setCartItems}
            setTotal={setTotal}
            total={total}
          />} />
          <Route path='/paymentdetails' element={<PaymentDetails
            cartItems={cartItems}
            total={total}
            setCartItems={setCartItems}
          />} />
          <Route path='liveAuction' element={<LiveAuction />} />
          <Route path='/thanks' element={<Thanks />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
