import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Main/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a la tienda de Sublimarte"/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo="Bienvenidos a la tienda de Sublimarte"/>} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>} />
        <Route path="*" element={ <div>Error</div> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App