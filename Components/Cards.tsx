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
const Cards = () => {
  return (
    <div className="card">
      <div className="card-image card-1">
        <Image
          src="/A.jpg"
          width={264}
          height={182}
          className="card-img"
          alt="image"
        />
      </div>
      <div className="card-title">
        <h2> chilling with wizkid</h2>
        <FontAwesomeIcon
          icon={faClock}
          style={{ fontSize: 20, color: "black" }}
        />
      </div>
      <div className="card-details">
        {" "}
        <p>you forget to look at your phone</p>
      </div>

      <Tag />
      <p id="from">From:</p>

      <div className="card-price">
        <h2>₦3000</h2>
        <a>
          <FontAwesomeIcon icon={faHeart} />
        </a>
      </div>
    </div>
  );
};
export default Cards;
