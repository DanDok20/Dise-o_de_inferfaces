import {Route, Routes} from 'react-router-dom'
import "./components/StartPage.css"

import StartPage from "./StartPage"
import Agents from "./Agents"
import Eventos from './Eventos'
import Maps from './Maps'
import Login from './Login'
import Registration from './Register'
import ContactUs from './ContactUs'
import NavBar from './Nav'
import NotFoundMessage from './NotFound'

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      {/* <Link to='/agentes'>LINK-NAME</Link> */}

      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/agentes' element={<Agents/>}/>
        <Route path='/mapas' element={<Maps/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
        <Route path='/foro' element={<Maps/>}/>
        <Route path='/contactanos' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registration/>}/>
        <Route path='*' element={<NotFoundMessage/>}/>
      </Routes>
    </div>
    </div>

    
  );

}

export default App;
