import './App.css'
import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/Main/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Proximamente Ecommerce Sublimarte"/>
    </div>
  )
}

export default App