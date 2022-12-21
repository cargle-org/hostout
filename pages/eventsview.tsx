import Head from 'next/head'
import {
  faAngleRight,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Footer from "../Components/Footer";
import Experience from "../Components/Experience";
import Picture from "../Components/Picture";
import RelatedPictures from "../Components/RelatedPictures";
import Link from "next/link";
import Tag from '../Components/Tag';
import { useEffect, useState } from 'react';
import Etag from '../Components/etag';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface FormInputs {
  singleErrorInput: string
}


const Eventsview = () => {

const { register ,formState: { errors }, handleSubmit } = useForm();

const onSubmit:any = (data: FormInputs) => {
  alert(JSON.stringify(data));
}


  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("12/31/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);


      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(m);

      const s = Math.floor(
        (difference % (1000 * 60)) / 1000);
      setSeconds(s);

    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <Head>
        <title>Hostout</title>
        <meta name="description" content="Host and find events near you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nv-bar">
        <div className="nv-form">
          <input placeholder="Search events" />
          <div className="nv-search">
            <a href="#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>

        <ul className="ul-li">
          <li id="angle-down">
            <a>
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </li>
          <li>
            <div className="nv-img">
              <Image src="/avatar.jpeg" width={50} height={50}  alt='image'/>
            </div>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faBell} />
            </a>
          </li>
          <li>
            <Link href='/eventsinput'><a className="nav-btn">
              Host an Event
            </a></Link>
          </li>
          <li>
            <Link href="/eventspage">
              <a className="nv-option">
                Hangouts
              </a>
            </Link>
          </li>
          <li>
            <Link href='/eventspage'><a className="nv-option">
              Trending
            </a></Link>
          </li>
        </ul>
      </div>

      {/*-----events page header------*/}
      <div className="flexbx-container">
        <div className="flexbx-1 flexbx-item">
          <h1>Chilling with wizkid at Oniru Beach</h1>
          <p className='flexbx-1p' >
            Host or Register an event and hangout, meet new people, have fun and
            enjoy every bit of your time.
          </p>
          <Etag />
          <div className="clock-container">
            <div className="days item">
              <h1 id="d">{days}</h1>
              <p>days</p>
            </div>
            <div className="hours item">
              <h1 id="h">{hours}</h1>
              <p>hours</p>
            </div>
            <div className="minutes item">
              <h1 id="min">{minutes}</h1>
              <p>minutes</p>
            </div>
            <div className="seconds item">
              <h1 id="sec">{seconds}</h1>
              <p>seconds</p>
            </div>
          </div>



        </div>
        <div className="flexbx-2"></div>
        <div></div>
      </div>

      <div id="About-event">
        <h2>About Event </h2>
      </div>

      {/*-----events page header end------*/}

      {/*-----events section start-----*/}
      <div className="About-Events-container">
        <div className="About-description about-1st">
          < div className="About-top">
            <div className="About-image"></div>
            <div className="About-title1">
              <h3>Description</h3>
            </div>
          </div>
          <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
        <div className="About-Food-menu about-1st">
          <div className="About-top">
            <div className="About-image"></div>
            <div className="About-title2">
              <h3>Description</h3>
            </div>
          </div>

          <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
      </div>

      <div className="Host-flexbox">
        <div className="About-host-container">
          <div className="About-host-img"></div>
          <div className="About-host-details">
            <p>Host</p>
            <h3>Anna</h3>
          </div>
        </div>
      </div>


      <div className="About-Events-container">
        <div className="About-description about-1st">
          < div className="About-top">
            <div className="About-image"></div>
            <div className="About-title3">
              <h3>Description</h3>
            </div>
          </div>
          <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
        <div className="About-Food-menu about-1st">
          <div className="About-top">
            <div className="About-image"></div>
            <div className="About-title4">
              <h3>Description</h3>
            </div>
          </div>

          <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
      </div>
      {/*-----events section end-----*/}
      <div id="About-event">
        <h2>Pictures </h2>
      </div>
      <div className="input-picture-container">

        <Picture />
        <Picture />
        <Picture />
        <Picture />
      </div>

      <div id="About-event">
        <h2>Register </h2>
      </div>

      <div className="events-container-alert">
        <div className="events-alert">
          <p>Note that a sum of ₦1200 will be charged as registration fee and this will cover for the event hosting fee and a cup of Parfait.</p>
        </div>
      </div>

      <div className="form-input">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-event-title'>
            <h3>Full name here *</h3>
            <input
           {...register("formTitle", { required: "fill this field" })}
            type='text'
             placeholder='Enter Full name here *'
               />
                <ErrorMessage
                errors={errors}
                name="formTitle"
                render={({ message }) => <p className='formError'>{message}</p>}
              />
          </div>
          <div className='persons-input-info'>
            <h3>How many of you are coming?</h3>
            <div id='persons-container'>
              <input type="radio" name="persons" required value="" /> <span>I&apos;m coming Alone</span>
              <input type="radio" name="persons" required value="" />  <span>No, I&apos;m booking for a friend</span>
              <input type="radio" name="persons" required value="" />  <span> No, We are</span>
            </div>
          </div>
          <div>
            <h3> You would love to take something, what&apos; is that? (optional)</h3>
            <div className='input-act-menu'>
              <input type="text"
               placeholder="Select menu"
               {...register("SelectMenu", { required: "fill this field" })}/>
               <ErrorMessage
                errors={errors}
                name="SelectMenu"
                render={({ message }) => <p className='formError'>{message}</p>}
              />
              <select id="act-items" required>
                <option value="">per  go / quantity </option>
                <option value="">CODM</option>
                <option value="">DEFCON</option>
                <option value="">Dancing </option>
              </select>
              <span>Amount</span>
              <input type="text"
               placeholder="enter price"
               {...register("EnterPrice", { required: "fill this field" })}/>
               <ErrorMessage
                errors={errors}
                name="EnterPrice"
                render={({ message }) => <p className='formError'>{message}</p>}
              />
              <button >Add</button>

            </div>
          </div>
          <div>
            <h3>Not just food, choose Games&activities and have fun (optional)</h3>
            <div className='input-act-menu'>
              <input type="text" 
              placeholder="select  activity here"
              {...register("SelectActivity", { required: "fill this field" })}/>
              <ErrorMessage
                errors={errors}
                name="SelectActivity"
                render={({ message }) => <p className='formError'>{message}</p>}
              />
              <select id="act-items" required>
                <option value="">per  go / quantity </option>
                <option value="">CODM</option>
                <option value="">DEFCON</option>
                <option value="">Dancing </option>
              </select>
              <span>Amount</span>
              <input type="text"
               placeholder="enter price" 
               {...register("enterPrice", { required: "fill this field" })} />
                             <ErrorMessage
                errors={errors}
                name="enterPrice"
                render={({ message }) => <p className='formError'>{message}</p>}
              />
              <button >Add</button>

            </div>
          </div>

          <div className='persons-input-info'>
            <h3>Updating you about the event is important, how do you want to get update?</h3>
            <div id='persons-container'>
              <input type="radio" name="person" required value="" /> <span>Email Address</span>
              <input type="radio" name="person" required value="" />  <span>Phone number</span>
              <input type="radio" name="person" required value="" />  <span> Both</span>
            </div>
          </div>

          <div className='event-location-description'>
            <h3>That&apos;s not all, you may want to ask the host for a special request *</h3>
            <textarea rows={5} 
             
            placeholder='Enter your description here'
            {...register("formDescription", { required: "fill this field" })} />
             <ErrorMessage
                errors={errors}
                name="formDescription"
                render={({ message }) => <p className='formError'>{message}</p>}
              />
          </div>
          <div className="events-total-pay">
            <span>Total</span>
            <div className="events-total-amount">
              <p>Amount(₦)</p>
              <p id="Amount">1000</p>
            </div>
          </div>
          <div id='input-event-btn'>
            <button className='input-event-button'  type='submit'>Proceed to Payments</button>
          </div>
        </form>
      </div>
      <div id="About-event">
        <h2>Related Hangouts </h2>
      </div>
      <div className=" card-container">
        <RelatedPictures />
        <RelatedPictures />
        <RelatedPictures />
        <RelatedPictures />
      </div>
      <div id="About-event">
        <h2>Peoples Experience </h2>
      </div>
      <div className='about-container'>
      <Experience  star5={<StarIcon fontSize="small"/>} name="Jenifer Afolayan" image="/experience-pic-2.jpg"/>
			<Experience  star5={<StarHalfIcon fontSize="small"/>} name="Chike Bright" image="/experience-pic-5.jpg"/>
			<Experience  star5={<StarBorderIcon fontSize="small"/>} name="Ayo Williams" image="/experience-pic-3.jpg"/>
            
      </div>
      <Footer />
    </div>
  )
}
export default Eventsview