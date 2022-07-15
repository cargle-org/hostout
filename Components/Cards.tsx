import Tag from './Tag';
import Image from 'next/image'
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

 const Cards = () => {
  return (
    <div className='card'>
    <div className='card-image card-1'>
    <Image src='/A.jpg'
      width={264}
      height={182}
      className="card-img"
      alt='image'
    />

     </div>
   <div className='card-title'>
     <h2> chilling with wizkid</h2>
     <FontAwesomeIcon 
     icon={faClock}
     style={{ fontSize: 20, color: "black" }} />
     </div>
  <div className="card-details"> <p>you forget to look at your phone</p>
  </div>
  
  <Tag />
  <p id='from'>From:</p>

   <div className='card-price'>
       
       <h2>₦3000</h2>
  <a><FontAwesomeIcon icon={faHeart} /></a>
   </div>
 </div>
  )
}
export default Cards