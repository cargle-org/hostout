import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-regular-svg-icons';

 const RelatedPictures = () => {
  return (
    <div className="related-cards">
        <div className="related-img">
          <Image 
            src='/A.jpg'
            width={280}
            height={256}
            alt='image'
          />
        </div>
        <div className="related-buttom">
          <div className="related-title"><h4>End of the year flexing Dubai</h4></div>
          <div className="related-details">
            <p><FontAwesomeIcon icon={faClock} /> 2d 12hr | Starting from: <span>₦2500</span></p>
          </div>
        </div>
      </div>
  )
}
export default RelatedPictures
