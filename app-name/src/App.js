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
import Foro from './Foro'
import infoAgent from './InfoAgent'
import infoMap from './infoMap'

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      {/* <Link to='/agentes'>LINK-NAME</Link> */}

      <Routes>
        <Route path='/' element={<StartPage/>} exact/>
        <Route path='/agentes' element={<Agents/>} exact/>
        <Route path='/agentes/:agentName' element={<infoAgent/>} exact/>
        <Route path='/mapas' element={<Maps/>} exact/>
        <Route path='/eventos' element={<Eventos/>} exact/>
        <Route path='/foro' element={<Foro/>} exact/>
        <Route path='/contactanos' element={<ContactUs/>} exact/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registration/>} exact/>
        <Route path='/mapaK' element={<infoMap/>} exact/>
        <Route path="*" element={<NotFoundMessage/>}/>
      </Routes>
    </div>
    </div>

    
  );

}

export default App;
