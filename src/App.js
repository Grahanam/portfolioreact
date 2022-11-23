import {Routes,Route} from 'react-router-dom'


//container
import Sidebar from './container/sidebar';
import Bottombar from './container/mobilebar';
//pages
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact';
import Skill from './pages/skill';


function App() {
  return (
  <>
    <div className=" h-screen font-poppins">
      <div className="flex h-full">
      <Sidebar/>
      <div className="w-full h-screen relative overflow-y-hidden">
        <Routes>
          <Route path="/portfolioreact" element={<Home/>}/>
          <Route path="/portfolioreact/about" element={<About/>}/>
          <Route path="/portfolioreact/skill" element={<Skill/>}/>
          <Route path="/portfolioreact/project" element={<Project/>}/>
          <Route path="/portfolioreact/contact" element={<Contact/>}/>
          
        </Routes>
      </div>
      <Bottombar/>
      
      </div>   
    </div>
  </>
  );
}

export default App;
