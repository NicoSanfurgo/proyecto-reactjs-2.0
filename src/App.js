import './App.css';
import NavBar from './Components/NavBar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Productos from './Productos/Productos';
import Remeras from './Remeras/Remeras';
import Figuras from './Figuras/Figuras';
import Soporte from './Soporte/Soporte';
import Detalle from './Detalles/detalles';




function App() {
  const menus = [{
    name:'Inicio',
    href:'/'
  },
  {
    name:'Productos',
    href:'/producto'
  },
  {
    name:'Remeras',
    href:'/remeras'
  },
  {
    name:'Figuras',
    href:'/figuras'
  },
  {
    name:'Soporte',
    href:'/soporte'
  }

]

return (
  <BrowserRouter  className="App">
    <NavBar menus={menus} />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/producto' element={<Productos />} />
      <Route exact path='/remeras' element={<Remeras />} />
      <Route exact path='/figuras' element={<Figuras />} />
      <Route exact path='/soporte' element={<Soporte />} />
      <Route exact path='/detalleproducto/:idproducto/:nombre' element={<Detalle />} />
    </Routes>
  </BrowserRouter >
);
}
export default App;