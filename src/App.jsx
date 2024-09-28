import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItenListContainer/ItenListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div className='App'>
        <ItemListContainer greeting={'Bienvenidos a nuestra pagina'}/>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada ' ,quantity)}/>
      </div>
    </>
  )
}

export default App
