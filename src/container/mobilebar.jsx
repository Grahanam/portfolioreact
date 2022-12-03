import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFire,faBarChart ,faContactCard,faUserAstronaut} from '@fortawesome/free-solid-svg-icons'



const Bottombar = ()=>{
    return(
        <>
        <div className=" w-full bg-black fixed bottom-0 inset-x-0 md:hidden lg:hidden">
            <div className=" flex mx-1 my-1 justify-evenly">
                <Link to="/portfolioreact" className=""  >
                {/* ${location==='/'?'white':'lightest'} */}
                  <button className={'w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2 items-center justify-start'}>
                  <i className=""><FontAwesomeIcon icon={faHome} className="mx-2"/></i>
                    {/* <p>Home</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/about" className="" >
                  <button className={'w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2 items-center justify-start'}>
                  <i className=""><FontAwesomeIcon icon={faUserAstronaut} className="mx-2"/></i>
                    {/* <p>About</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/skill" className=""  >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faFire} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/project" className=""  >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faBarChart} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </Link>
                <Link to="/portfolioreact/contact" className=""  >
                  <button className={`w-full text-xl font-semibold text-lightest hover:text-yellow-300  px-1 py-2  items-center justify-start`}>
                    <i className=""><FontAwesomeIcon icon={faContactCard} className="mx-2"/></i>
                    {/* <p>Project</p> */}
                  </button>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Bottombar