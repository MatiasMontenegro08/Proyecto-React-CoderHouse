import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Main/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Proximamente Ecommerce Sublimarte"/>
    </div>
  )
}

export default App