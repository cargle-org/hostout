import Image from 'next/image';
import { faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-regular-svg-icons';

 const Experience = () => {
  return (
    <div className='experience-card'>
    <div className='ex-top'>
    <div className='ex-img'>
        <Image 
            src="/avatar.jpeg"
            alt=' weeee'
            height={60}
            width={60}
        />
    </div>
    <div>
    <div className='ex-name'><h3>Gabriel Afolayan</h3></div>
     <div className='ex-icons'>
         <span><FontAwesomeIcon icon={faStar} /></span>
         <span><FontAwesomeIcon icon={faStar} /></span>
         <span><FontAwesomeIcon icon={faStar} /></span>
         <span><FontAwesomeIcon icon={faStar} /></span>
         <span><FontAwesomeIcon icon={faStar} /></span>
         <p>4.9</p>
     </div>
    </div>
    </div>
    <div className='ex-detail'>
        <p>Hostout connects people together (host and hostee) for hangout and events. You can get to attend the event of your choice just by searching or checking events that matches your profile tags.</p>
        <h3>3 months ago</h3>
         </div>

     </div>
  )
}
export default Experience;