import {Outlet} from 'react-router-dom'



import Sidebar from '../container/sidebar';
import Bottombar from '../container/mobilebar';
function Layout() {
  return (
  <>
    <div className=" h-screen font-poppins">
      <div className="flex h-full">
      <Sidebar/>
      <div className="w-full h-screen relative overflow-y-hidden">
        <Outlet/>
      </div>
      <Bottombar/>
      
      </div>   
    </div>
  </>
  );
}

export default Layout;