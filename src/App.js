import './App.css';
import NavBar from './Components/NavBar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cards from './Cards'
import './App.css'
import Home from './Home/Home';
import Productos from './Productos/Productos';
import Remeras from './Remeras/Remeras';
import Figuras from './Figuras/Figuras';
import Soporte from './Soporte/Soporte';
import Detalle from './Detalles/detalles';


function App() {
  return (
    <BrowserRouter className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/productos' element={<Productos />} />
        <Route exact path='/remeras' element={<Remeras />} />
        <Route exact path='/figuras' element={<Figuras />} />
        <Route exact path='/soporte' element={<Soporte />} />
        <Route exact path='/detalle/:id' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;