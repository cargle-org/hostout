import { faAngleDown, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";



 const Navbar = () => {
  return (
    <div className="nav-bar">
    <div className="nav-form">
      <input  placeholder="Search events"/>
    <div className="nav-search"><a href="#"><FontAwesomeIcon icon={faSearch} /></a></div>
    </div>
   
    <ul className="ul-li">
    <li id="angle-down"><a><FontAwesomeIcon icon={faAngleDown} /></a></li>
      <li>
        <div className="nav-img">
          <Image src="/avatar.jpeg" width={50} height={50} />
        </div>
      </li>
      <li><a><FontAwesomeIcon icon={faBell} /></a></li>
      <li>
        <a href="#" className="nav-btn">
          Host an Event
        </a>
      </li>
      <li>
        <a href="#" className="nav-option">
          Hangouts
        </a>
      </li>
      <li>
        <a href="#" className="nav-option">
          Trending
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Navbar
