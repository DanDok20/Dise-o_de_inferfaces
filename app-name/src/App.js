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
import InfoForo from './ForoPost'
import InfoAgent from './InfoAgent'
import InfoMap from './InfoMap'
import Footer from './Footer'
import Privacidad from './Privacidad'
import Terminos from './Terminos'
import {AuthContextProvider} from "./context/AuthContext"

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Link to='/agentes'>LINK-NAME</Link> */}
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/agentes' element={<Agents/>} exact/>
          <Route path='/agentes/:agentName' element={<InfoAgent/>}/>
          <Route path='/mapas' element={<Maps/>}/>
          <Route path='/mapas/:mapName' element={<InfoMap/>}/>
          <Route path='/eventos' element={<Eventos/>}/>
          <Route path='/foro' element={<Foro/>}/>
          <Route path='/foro/post-1' element={<InfoForo/>}/>
          <Route path='/foro/post-2' element={<InfoForo/>}/>
          <Route path='/foro/post-3' element={<InfoForo/>}/>
          <Route path='/foro/post-4' element={<InfoForo/>}/>
          <Route path='/foro/post-5' element={<InfoForo/>}/>
          <Route path='/foro/post-6' element={<InfoForo/>}/>
          <Route path='/contactanos' element={<ContactUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registro' element={<Registration/>}/>
          <Route path='/Privacidad' element={<Privacidad/>}/>
          <Route path='/Terminos' element={<Terminos/>}/>
          <Route path='/perfil'/>
          <Route path="*" element={<NotFoundMessage/>}/>
        </Routes>
      </AuthContextProvider>
      <Footer/>
    </div>    
  );

}

export default App;
