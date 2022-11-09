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
    <div className=" h-screen">
      <div className="flex h-full">
      <Sidebar/>
      <div className="w-full h-full relative overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Bottombar/>
      
      </div>   
    </div>
  </>
  );
}

export default App;
