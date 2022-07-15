import Head from 'next/head'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Components/Cards";
import Navbar from "../Components/Navbar";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Past from "../Components/Past";

const Eventspage = () => {
  return (
    <div>
      <Head>
        <title>Hostout</title>
        <meta name="description" content="Host and find events near you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <div className='menu-display'>
    <h2>All</h2>
    </div>
    <div id='menu'>
        <ul>
            <li><a href='#'>All</a></li>
            <li><a href='#'>Trending</a></li>
            <li><a href='#'>Hangouts</a></li>
            <li><a href='#'>Celebrity</a></li>
            <li><a href='#'>Entertainment</a></li>
            <li><a href='#'>Tech</a></li>
            <li><a href='#'>Company</a></li>
            <li><a href='#'>Society</a></li>
            <li className='li-drop li-left'><a href='#'> <span><FontAwesomeIcon icon={faAngleDown} /></span> by Days</a></li>
            <li className='li-drop'> <a href='#'> <span><FontAwesomeIcon icon={faAngleDown} /></span>  by price</a></li>
            <li > </li>
        </ul>
        <a id='event-li-button' href='#'>Filter</a>
    </div>
    <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className='load-more'>
        <a>Load More</a>
    </div>
    <div id="About-event">
    <h2>Past Events</h2>
  </div> 
<Past />
<div id="About-event">
    <h2>People&apos;s experience</h2>
  </div>
<div className='about-container'>
     <Experience />
     <Experience />
     <Experience />
     </div>
<Footer/>
    </div>
  )
}
export default Eventspage