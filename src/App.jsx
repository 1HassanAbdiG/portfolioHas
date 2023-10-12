import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/header';
import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/project';
import Home from './pages/home';
import Page404 from './pages/page404';
import Web from './pages/web';
import Destop from './pages/destop';
import Mobile from './pages/mobile';
import Tictactoe from './component/tictactoe';



function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<><Header /><Home /></>}></Route>
        <Route path='/about' element={<><Header /><About /></>}></Route>
        <Route path='/project' element={<><Header /><Project /></>}></Route>
        <Route path='/contact' element={<><Header /><Contact /></>}></Route>  
        <Route path='/web' element={<><Header /><Web /></>}></Route>  
        <Route path='/destop' element={<><Header /><Destop /></>}></Route> 
        <Route path='/mobile' element={<><Header /><Mobile /></>}></Route> 
        <Route path='/tictactoe' element={<><Header /><Tictactoe /></>}></Route> 
        
        <Route path="*" element={<Page404 />}></Route>   
        
      </Routes>
    </div>
  );
}

export default App;
