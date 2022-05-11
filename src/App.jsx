
// REACT-ROUTER-DOM
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// PANTALLAS
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Reserve from "./pages/Reserve.jsx";
import Menu from "./components/Menu.jsx";
import NotFoundPages from './pages/NotFoundPages.jsx'

export default function App(){
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/reserve" element={<Reserve/>}></Route>

        {/* PANTALLA PARA RUTAS NO EXISTENTES */}
        <Route path="*" element={<NotFoundPages/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}