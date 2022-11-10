import {Outlet,NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFire,faBarChart ,faContactCard,faUserAstronaut} from '@fortawesome/free-solid-svg-icons'

// import AuthContext from "../../context/AuthContext"


const Bottombar = ()=>{
//   let {location}=useContext(AuthContext)
     let location=''
    return(
        <>
        <div className=" w-full bg-black block absolute bottom-0 md:hidden lg:hidden">
            <div className=" flex mx-1 my-1 justify-evenly">
                <NavLink to="/" className=""  >
                {/* ${location==='/'?'white':'lightest'} */}
                  <button className={'w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2 items-center justify-start'}>
                  <i className=""><FontAwesomeIcon icon={faHome} className="mx-2"/></i>
                    {/* <p>Home</p> */}
                  </button>
                </NavLink>
                <NavLink to="/about" className="" >
                  <button className={'w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2 items-center justify-start'}>
                  <i className=""><FontAwesomeIcon icon={faUserAstronaut} className="mx-2"/></i>
                    {/* <p>About</p> */}
                  </button>
                </NavLink>
                <NavLink to="/skill" className=""  >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faFire} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </NavLink>
                <NavLink to="/project" className=""  >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faBarChart} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </NavLink>
                <NavLink to="/contact" className=""  >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faContactCard} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </NavLink>
              
                <Outlet/>
            </div>
        </div>
        </>
    )
}
export default Bottombar