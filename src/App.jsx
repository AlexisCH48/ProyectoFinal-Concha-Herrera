import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItenListContainer/ItenListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <div className='App'>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a nuestra pagina'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App