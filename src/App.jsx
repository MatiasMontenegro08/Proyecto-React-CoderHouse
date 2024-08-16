import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Main/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import CartContainer from './components/Cart/CartContainer'
function App() {
  return (
    <BrowserRouter>

      <CartProvider>
        <NavBar/>

        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="Bienvenidos a la tienda de Sublimarte"/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Bienvenidos a la tienda de Sublimarte"/>} />
            <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path="*" element={ <div>Error</div> } />
          </Routes>
        </main>

        <Footer />
      </CartProvider>
      
    </BrowserRouter>
  )
}

export default App