import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import CartContainer from './components/Cart/CartContainer';
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import Nosotros from './pages/Nosotros/Nosotros';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes/PreguntasFrecuentes';
import Checkout from './components/Checkout/Checkout';
import PageNotFound from './components/Error/PageNotFound';
import { CartProvider } from './context/CartContext';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>

      <CartProvider>
        <NavBar />
        <ToastContainer autoClose={3000} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/producto' element={<Productos />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/preguntas' element={<PreguntasFrecuentes />} />
            <Route path="/categoria/:idCategoria" element={<Productos />} />
            <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <Footer />
      </CartProvider>

    </BrowserRouter>
  )
}

export default App