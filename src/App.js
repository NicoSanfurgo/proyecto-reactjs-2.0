import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './NavBar/index';
import Home from './Home/Home'
import Productos from './Productos/Productos'
import Detalle from './Detalles/detalles';
import Contacto from './Contacto/Contacto';

function App() {
  const menus = [{
    name:'Inicio',
    href:'/'
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
    name:'Contacto',
    href:'/contacto'
  }

]
  return (
    <BrowserRouter  className="App">
      <NavBar menus={menus} />
      <Routes>
      <Route exact path='/' element={<Home />}/>
        <Route exact path='/Productos' element={<Productos />} />
        <Route exact path='/contacto' element={<Contacto/>} />
        <Route exact path='/detalleproducto/:idproducto/:nombre' element={<Detalle />} />
      </Routes>
    </BrowserRouter >
  );
}
export default App;
