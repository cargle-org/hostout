import React, {useState, useContext, useEffect } from "react"
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { text } from "stream/consumers";
import AppContext from "../context/AppContext";
import {success, error} from "../helpers/Alert";
import axios from "axios";


interface FormInputs {
  singleErrorInput: string;
}

export const Eventsinput = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit: any = (data: FormInputs) => {
    alert(JSON.stringify(data));
  };

  const {newEventLoading, setNewEventLoading} = useContext(AppContext);

  let SN = 0;

  const [eventProgramme, setEventProgramme] = useState(["opening prayer", "Refreshment", "Closing Prayer"])
  console.log("eventProgramme", eventProgramme)
  const [eventTags, setEventTags] = useState([])
  console.log(" eventTags", eventTags)
  const [eventMenu, setEventMenu] = useState([])
  console.log("eventMenu", eventMenu)
  const [activityList, setActivityList] = useState({
        "activity_name": "",
        "price": 0,
        "description":""
  })
  console.log("activityList", activityList)


  const [newEvent, setNewEvent] = useState({
    name:"",
    image: ["first image"],
    event_programme: [],
    time: "",
    date:"",
    location: "",
    event_type: "Private",
    event_fee: 0,
    tags:[],
    menu:[],
    additional_activities:[]
  })

    const onchangeHandler = (e) => {
        e.persist();
        setNewEvent((item) => ({
        ...item,
        [e.target.name]: e.target.value,
        }));
    };

    const onArrayChangeHandler = (e) => {
        e.persist();
        setNewEvent((item) => ({
        ...item,
        [e.target.name]: [...item[e.target.name], e.target.value]
        }));
    };

    // Event programme handler
    const eventProgrammeHandler = async (e) => {
      try {
        console.log("eventProgrammeHandler ~ e", e.target.value)
        e.preventDefault();
        setEventProgramme([...eventProgramme, e.target.value]);
      } catch (error) {
        console.log("🚀 ~ file: eventsinput.tsx ~ line 74 ~ eventProgrammeHandler ~ error", error)
      }
    }

    // Event tags handler
    const eventTagsHandler = async (e) => {
      try {
        e.preventDefault();
        setEventTags([...eventTags, e.target.value]);
      } catch (error) {
        console.log("🚀 ~ file: eventsinput.tsx ~ line 74 ~ eventProgrammeHandler ~ error", error)
      }
    }

    // Event Menu handler
    const eventMenuHandler = async (e) => {
      try {
        e.preventDefault();
        setEventMenu([...eventMenu, e.target.value]);
      } catch (error) {
        console.log("🚀 ~ file: eventsinput.tsx ~ line 74 ~ eventProgrammeHandler ~ error", error)
      }
    }  

    const onActivitiesChangeHandler = (e) => {
     try {
       e.preventDefault();
       setActivityList((item) => ({
        ...item,
        [e.target.name]: e.target.value,
        }));
     } catch (error) {
      console.log("onActivitiesChangeHandler ~ error", error)
      
     }
    }

    const submit = async (e) => {
    e.preventDefault();
    console.log("newEvent: ", newEvent);
    try {
        setNewEventLoading(true);
        const response = await axios.post(
        "https://event-manager001.herokuapp.com/api/v1/event/create",
        newEvent,
        {
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("hostout-token")}`,
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmU3NmEyYjViOWQzNWZmMmU4MjhjMiIsImlhdCI6MTY2ODE4NDIwNCwiZXhwIjoxNjY4MjcwNjA0fQ.HvYaem-OuE3PgHBJB9LDH6s8RLQQZqzTdykoLE17fbw`,
          },
        }
      );
      console.log("🚀 ~ file: eventsinput.tsx ~ line 60 ~ submit ~ response", response)
      setNewEventLoading(false);
      if (response.status === 201) {
        success(response.data.msg);
      }
    } catch (err) {
      error("Couldn't create event");
      console.log(err);
      setNewEventLoading(false);
    }
  };

  // UPDATE MAIN STATE
  useEffect(() => {
    setNewEvent((item) => ({
        ...item,
        event_programme: [...item.event_programme, eventProgramme],
    }));
  }, [eventProgramme])

  useEffect(() => {
    setNewEvent((item) => ({
        ...item,
        tags: [...item.tags, eventTags],
    }));
  }, [eventTags])

  useEffect(() => {
    setNewEvent((item) => ({
        ...item,
        menu: [...item.menu, eventMenu],
    }));
  }, [eventMenu])

  useEffect(() => {
    setNewEvent((item) => ({
        ...item,
        additional_activities: [...item.additional_activities, activityList],
    }));
  }, [activityList])


  return (
    <div>
      <Head>
        <title>Hostout</title>
        <meta name="description" content="Host and find events near you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="form-input">
        <div id="About-event">
          <h2>Host an event</h2>
        </div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        {/* <form onSubmit={submit}> */}

          {/* name */}
          <div className="form-event-title">
            <h3>Enter Event Name*</h3>
            <input
              type="text"
              placeholder="Enter Event Name"
              id="name"
              name="name"
              onChange={onchangeHandler}
              required
              defaultValue={newEvent.name} 
            />
          </div>

          {/* event_programme */}
          <div className="person-container-info">
            <div className="person-name-info">
              <>
              <form onSubmit={eventProgrammeHandler}>  
                <h3>Enter Program*</h3>
                <input
                  type="text"
                  placeholder="Enter Event Title"
                  id="event_programme"
                  name="event_programme"
                  // onChange={eventProgrammeHandler}
                  required
                  // defaultValue={newEvent.event_programme} 
                />
                <button type="submit">Add</button>
              </form>
              <br />
              <ul style={{listStyle: "none"}}>
                {eventProgramme.map((event, i) => (
                  <li key={i}>
                    {SN = SN + 1}. {event}
                  </li>
                  ))}
              </ul>
            </>
            </div>
          </div>

          {/* time, date */}
          <div className="input-container">
            {/* time */}
            <div className="form-event-category">
              <h3>Time*</h3>
              <input
                type="time"
                placeholder="Enter Event Title"
                id="time"
                name="time"
                onChange={onchangeHandler}
                required
                defaultValue={newEvent.time} 
              />
            </div>

            {/* date */}
            <div className="form-event-category">
              <h3>Enter Date*</h3>
              <input
                type="date"
                id="date"
                name="date"
                onChange={onchangeHandler}
                required
                defaultValue={newEvent.date} 
              />
            </div>
          </div>

          {/* location */}
          <div className="form-event-title">
            <h3>Event Location*</h3>
            <input
              type="text"
              placeholder="Event Location"
              id="location"
              name="location"
              onChange={onchangeHandler}
              required
              defaultValue={newEvent.location} 
            />
          </div>

          {/* event type, event fee */}
          <div className="input-container">
            {/* event_type */}
            <div className="form-event-category">
             <h3>Event Type*</h3>
            <select name="event_type" id="event_type" required
              defaultValue={newEvent.event_type}>
              <option value="">Select event type</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
            </div>

            {/* event_fee */}
            <div className="form-event-price">
              <h3>Event registration price</h3>
              <input
                type="number"
                placeholder="Amount"
                id="event_fee"
              name="event_fee"
              onChange={onchangeHandler}
              required
              defaultValue={newEvent.event_fee} 
              />
            </div>
          </div>

          {/* tags */}
          <div className="person-container-info">
            <h3>Add tags to the event</h3>
            <div className="person-name-info">
              <form onSubmit={eventTagsHandler}>
                <input
                  type="text"
                  placeholder="Enter tag name"
                  id="tags"
                  name="tags"
                  // onChange={onArrayChangeHandler}
                  required
                  // defaultValue={newEvent.tags}
                  />
                <button type="submit">Add tag</button>
              </form>
              <br />
              <ul style={{listStyle: "none"}}>
                {eventTags.map((event, i) => (
                  <li key={i}>
                    {SN = SN + 1}.  {event}
                  </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* menu */}
          <div className="person-container-info">
            <h3>Add to event menu</h3>
            <div className="person-name-info">
              <form onSubmit={eventMenuHandler}>
               <input
                  type="text"
                  placeholder="Enter menu item name"
                  id="menu"
                  name="menu"
                  // onChange={onArrayChangeHandler}
                  required
                  // defaultValue={newEvent.menu}
                  />
                <button type="submit">Add to menu</button>
              </form>
              <br />
              <ul style={{listStyle: "none"}}>
                {eventMenu.map((event, i) => (
                  <li key={i}>
                    {SN = SN + 1}. {event}
                  </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Additional activities */}
          <div>
            <h3>Add the availabe lists of activities</h3>
            <form onSubmit={onActivitiesChangeHandler}>
              <div className="input-act-menu">
              {/* activity_name */}
                <span>Activity name</span>
                <input
                  type="text"
                  placeholder="enter activity here"
                  id="activity_name"
                name="activity_name"
                // onChange={onActivitiesChangeHandler}
                required
                // defaultValue={newEvent.additional_activities[0].activity_name} 
                />
                <br />

                {/* description */}
                <span>Description</span>
                <input
                  type="textarea"
                  placeholder="enter description"
                  id="description"
                name="description"
                // onChange={onActivitiesChangeHandler}
                required
                // defaultValue={newEvent.additional_activities[0].description} 
                />
                <br />

                {/* price */}
                <span>Amount</span>
                <input
                  type="text"
                  placeholder="enter price"
                  id="price"
                name="price"
                // onChange={onActivitiesChangeHandler}
                required
                // defaultValue={newEvent.additional_activities[0].price} 
                />
                <br />
                <button type="submit">Add activity</button>
              </div>
            </form>
          </div>

          {/* image */}
          <div className="input-events-image">
            <h3>event images / flyer</h3>
            <input
              type="file"
              placeholder="insert flyer / image"
              id="image"
              name="image"
              // onChange={onchangeHandler}
              required
              defaultValue={newEvent.image} 
              
            />{" "}
            <span>Attach image files</span>
          </div>
          <div id="input-event-btn">
            <button className="input-event-button" type="submit">
              Create Event
            </button>
          </div>
        {/* </form> */}
      </div>
      <div id="About-event">
        <h2>People&apos;s experience</h2>
      </div>
      <div className="about-container">
        <Experience />
        <Experience />
        <Experience />
      </div>

      <Footer />
    </div>
  );
};
export default Eventsinput;
