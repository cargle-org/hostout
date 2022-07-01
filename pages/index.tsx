import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Homehead from '../Components/Homepage-header'
import Card from '../Components/Cards'
import HowToHost from '../Components/How-to-host'
import HowToAttend from '../Components/How-to-attend'
import About from '../Components/About-hostout'
import Experience from '../Components/Experience'
import Footer from '../Components/Footer'
const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Hostout</title>
        <meta name="description" content="Host and find events near you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='app'>
        <Navbar />
        <Homehead />
        <div className='about1'>
          <div id='card-head'><h2>Popular events inspired by people’s browsing</h2> <a>view all</a></div>
          <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div id="About-event">
            <h2>All about Hostout</h2>
          </div>
          <div className='about-container'>
            <About />
            <About />
            <About />
          </div>
          <HowToHost />
          <HowToAttend />
          <div id='card-head'><h2>Recommended for you </h2><a>view all</a></div>
          <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div id="About-event">
        <h2>People's experience</h2>
      </div>
      <div className='about-container'>
         <Experience />
         <Experience />
         <Experience />
         </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
