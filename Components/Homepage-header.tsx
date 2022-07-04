import Link from "next/link"

 const Homehead = () => {
  return (
    <div className='flexbox-container'>
    <div className='flexbox-1 flexbox-item'>
        <h1>Don't stay <span>bored</span>, go for </h1>
        <h1><span>Events</span> & <span>Hangouts</span></h1>
        <p>Host or Register an event and hangout, meet new people, have fun and enjoy every bit of your time.</p>
        <div className='hp-btn'>
            <Link href='/eventspage'><a href="#" className='flexbox-1-btn'>Explore events</a></Link>
            <Link href='/eventsview'><a href="#" className='flexbox-1-btn2'>Learn more</a></Link>
        </div>
    </div>
    <div className='flexbox-2'>
   
    </div>
    <div>
        
    </div>



    </div>
  )
}
export default Homehead