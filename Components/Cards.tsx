import Tag from "./Tag";
import Image from "next/image";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWJkNDZmNzI4YTA2NjE4MjgyMzAwYSIsImlhdCI6MTY1OTk5NjI1OCwiZXhwIjoxNjYwMDgyNjU4fQ.SryJNUfNmzvHReRf3NEhk6qxXFuSOL4gpyWaqgCtwKQ'

export const getStaticProps =async () => {
const data = await axios.head('https://event-manager001.herokuapp.com/api/v1/event/get/all/events?page=1&limit=2',{
  headers: {
    "Authorization":`Bearer ${authToken}`
  }
})
.then(res => console.log(res))
.catch(err => console.log(err))
}
console.log(getStaticProps())
const Cards = ({image}) => {
  // {event}
  return (
    <div className="card">
      <div className="card-image" style={{backgroundImage: `url(${image})`, backgroundSize: "150%", 
  backgroundRepeat: "no-repeat", overflow: "hidden", backgroundPosition:"center center"}}>
      </div>
      <div className="card-title">
        <h2> Chilling with wizkid</h2>
        <FontAwesomeIcon
          icon={faClock}
          style={{ color: "#aaaaaa", paddingTop: "3px", fontSize: 20}}
        />
        <p> 4d</p>
      </div>
      <div className="card-details">
        <p>You forget to look at your phone<span>...</span></p>
      </div>

      <Tag />
      <p id="from">From:</p>

      <div className="card-price">
        <h2>₦3000</h2>
          <FontAwesomeIcon className="favorite" icon={faHeart}/>
      </div>
    </div>
  );
};
export default Cards;
