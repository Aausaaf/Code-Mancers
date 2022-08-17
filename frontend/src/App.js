import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import {Routes , Route} from 'react-router-dom'
import Gif from './Component/Gif';
import { Postcontexts } from './Context/contextapi';
import Conformpost from './Component/conformpost';
function App() {
  return (
   <>
   <Postcontexts>
   <div className="navbar">
      <h3>Post Creator</h3>
    </div>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/gif' element={<Gif/>}/>
    <Route path='/conform' element={<Conformpost/>}/>
  
  </Routes>
  </Postcontexts>
   
   </>
  );
}

export default App;
