import Image from "next/image"

const About = () => {
  return (
    <div className='about-card'>
    <div className='about-img'>
        <Image 
            src="/avatar.jpeg"
            height={100}
            width={100}
            alt='image'
        />
    </div>
    <div className='about-title'><h2>About all Hosts</h2></div>
    <div className='about-details'><p>Hostout connects people together (host and hostee) for hangout and events. You can get to attend the event of your choice just by searching or checking events that matches your profile tags.</p></div>
</div>
  )
}
export default About 