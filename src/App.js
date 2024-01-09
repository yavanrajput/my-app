
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Loginsignup from './pages/Loginsignup.jsx';
import Shop from './pages/shop.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/assests/banner_mens.png'
import women_banner from './components/assests/banner_women.png'
import kid_banner from './components/assests/banner_kids.png'
import Shopcategory from './pages/Shopcategory.jsx';
import Product from './pages/product.jsx';
import Cart from './pages/cart.jsx';

function App() {
  return (
    <div >
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path= '/' element={<Shop />}/>
      <Route path= '/mens' element={<Shopcategory banner ={men_banner} category="men"/>}/>
      <Route path= '/womens' element={<Shopcategory banner ={women_banner} category="women"/>}/>
      <Route path= '/kids' element={<Shopcategory banner ={kid_banner} category="kid"/>}/>
      <Route path="product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>

      </Route>
      <Route path= '/cart' element={<Cart/>}/>
      <Route path= '/login' element={<Loginsignup/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
