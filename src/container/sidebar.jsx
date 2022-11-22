import {Outlet,Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFire,faBarChart ,faContactCard,faUserAstronaut, faL ,faS} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
// import AuthContext from "../../context/AuthContext"

const Sidebar = ()=>{
//   let {location}=useContext(AuthContext)
     let location=''
    return(
        <>
        <div className="w-24 h-full flex-none bg-black hidden md:inline lg:inline">
            <div className="h-10 p-5 pb-10 mb-5 text-center">
                <span className="text-3xl font-extrabold text-white flex item-center justify-center duration-100">
                <i className="hover:text-yellow-400"><FontAwesomeIcon icon={faL} className="mx-0"/></i>
                <i className="hover:text-yellow-400"><FontAwesomeIcon icon={faS} className="mx-0"/></i>
                </span>
  
            </div>
            <div className="mx-2 my-4 mb-5">
                <Link to="/portfolioreact" className="" >
                  <button className={`w-full text-xl font-semibold text-${location==='/'?'white':'lightest'} hover:text-yellow-300  px-1 py-2 items-center justify-start`}>
                  <i className=""><FontAwesomeIcon icon={faHome} className="mx-2"/></i>
                    {/* <p>Home</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/about" className=""  >
                  <button className={`w-full text-xl font-semibold text-${location==='/about'?'white':'lightest'} hover:text-yellow-300  px-1 py-2 items-center justify-start`}>
                  <i className=""><FontAwesomeIcon icon={faUserAstronaut} className="mx-2"/></i>
                    {/* <p>About</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/skill" className="" >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faFire} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/project" className="" >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faBarChart} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/contact" className="" >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faContactCard} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </Link>
                <br/>
                <br/>
                <br/>
                
                  <button className={`w-full text-lg font-semibold text-lightest hover:text-white rounded px-3 py-2 items-center`}>
                  <a href='https://github.com/grahanam' target="_blank" rel="noreferrer"><i><FontAwesomeIcon icon={faLinkedin} className="mx-2"/></i></a>  
                  </button>
    
    
                  <button className={` w-full text-lg font-semibold text-lightest  rounded px-3 py-2  items-center  hover:text-white `}>
                   <a href='https://www.linkedin.com/in/lunaramsuthar/' target="_blank" rel="noreferrer"> <i><FontAwesomeIcon icon={faGithub} className="mx-2"/></i> </a>
                  </button>              
                <Outlet/>
            </div>
        </div>
        </>
    )
}
export default Sidebar