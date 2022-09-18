import {Route, Routes, Link} from 'react-router-dom'
import Navbar from "./components/Nav";
import "./components/App.css"

import Menu from "./Menu"

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/*<Link to='/'>LINK-NAME</Link>*/}

      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/agentes' element='{<Agentes/>}'/>
        <Route path='/mapas' element='{}'/>
        <Route path='/eventos' element='{}'/>
        <Route path='/foro' element='{}'/>
        <Route path='/contactos' element='{}'/>
        <Route path='/login' element='{}'/>
      </Routes>
    </div>
  );

}

export default App;
