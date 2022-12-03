import {Routes,Route} from 'react-router-dom'

//pages
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact';
import Skill from './pages/skill';
import Layout from './pages/layout';


function App() {
  return (
        <Routes basename="/portfolioreact">
          <Route path="/portfolioreact" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/portfolioreact/about" element={<About/>}/>
            <Route path="/portfolioreact/skill" element={<Skill/>}/>
            <Route path="/portfolioreact/project" element={<Project/>}/>
            <Route path="/portfolioreact/contact" element={<Contact/>}/>
          </Route>
        </Routes>
  );
}

export default App;
