import React, {useState, useContext } from "react"
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


  const [newEvent, setNewEvent] = useState({
    name:"",
    image: [""],
    event_programme: ["", ""],
    time: "",
    date:"",
    location: "",
    event_type: "",
    event_fee: 0,
    tags:["", ""],
    menu:["", ""],
    additional_activities:[{
        activity_name: "",
        price: 0,
        description: ""
    },
    {
        activity_name: "",
        price: 0,
        description: ""
    }
    ]
  })

    const onchangeHandler = (e) => {
        e.persist();
        setNewEvent((item) => ({
        ...item,
        [e.target.name]: e.target.value,
        }));
    };

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
            Authorization: `Bearer ${localStorage.getItem("hostout-token")}`,
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-event-title">
            <h3>Enter Event*</h3>
            <input
              {...register("enterEventName", { required: "Input event name." })}
              type="text"
              placeholder="Enter Event Title"
              id="eventName"
            />

            <ErrorMessage
              errors={errors}
              name="enterEvent"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>
          {/* this is where i added stuff */}
          <div className="form-event-title">
            <h3>Enter Date*</h3>
            <input
              {...register("enterEventName", { required: "Input event name." })}
              type="date"
              placeholder="Enter Event Title"
              id="eventName"
            />

            <ErrorMessage
              errors={errors}
              name="enterEvent"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>

          <div className="form-event-title">
            <h3>Event Location*</h3>
            <input
              {...register("enterEventName", { required: "Input event name." })}
              type="text"
              placeholder="Enter Event Title"
              id="eventName"
            />

            <ErrorMessage
              errors={errors}
              name="enterEvent"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>

          <div className="form-event-title">
            <h3>Enter Program*</h3>
            <input
              {...register("enterEventName", { required: "Input event name." })}
              type="text"
              placeholder="Enter Event Title"
              id="eventName"
            />

            <ErrorMessage
              errors={errors}
              name="enterEvent"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>

          <div className="form-event-title">
            <h3>Event Type*</h3>
            <input
              {...register("enterEventName", { required: "Input event name." })}
              type="text"
              placeholder="Enter Event Title"
              id="eventName"
            />

            <ErrorMessage
              errors={errors}
              name="enterEvent"
              render={({ message }) => <p className="formError">{message}</p>}
            /><div className="form-event-title">
            <h3>Enter Event*</h3>
            <input
              {...register("enterEventName", { required: "Input event name." })}
              type="text"
              placeholder="Enter Event Title"
              id="eventName"
            />

            <ErrorMessage
              errors={errors}
              name="enterEvent"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>
          </div>

          <div className="form-event-title">
            <h3>Time*</h3>
            <input
              {...register("enterEventName", { required: "Input event name." })}
              type="time"
              placeholder="Enter Event Title"
              id="eventName"
            />

            <ErrorMessage
              errors={errors}
              name="enterEvent"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>
          {/*-- the price and catergory is flexed---*/}
          <div className="input-container">
            <div className="form-event-category">
              <h3>Select a catergory</h3>
              <select id="items" required>
                <option value="#">select a catergory </option>
                <option value="Tech">Tech</option>
                <option value="Tech">Linux</option>
                <option value="Tech">loop</option>
              </select>
            </div>
            <div className="form-event-price">
              <h3>Event registration price</h3>
              <input
                {...register("amount", { required: "fill this field(₦)" })}
                type="number"
                placeholder="Amount"
              />
              <ErrorMessage
                errors={errors}
                name="amount"
                render={({ message }) => <p className="formError">{message}</p>}
              />
            </div>
          </div>
          <div className="form-event-description">
            <h3>Events description</h3>
            <textarea
              {...register("eventsDescription", { required: "fill this field" })}
              rows={5}
              placeholder="Enter your description here"
            />
            <ErrorMessage
              errors={errors}
              name="description"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>
          <div className="person-container-info">
            <h3>Add tags to an event</h3>
            <div className="person-name-info">
              <input
                {...register("menuName", { required: "fill this field" })}
                type="text"
                placeholder="Enter menu name"
              />
              <ErrorMessage
                errors={errors}
                name="menuName"
                render={({ message }) => <p className="formError">{message}</p>}
              />
              <button>Add</button>
            </div>
          </div>
          <div className="persons-input-info">
            <h3>How many persons per account</h3>
            <div id="persons-container">
              <input type="radio" name="persons" value="numberOfPeople" required />{" "}
              <span>The Account holder</span>
              <input type="radio" name="persons" value="numberOfPeople" required />{" "}
              <span>The holder and a friend</span>
              <input type="radio" name="persons" value="numberOfPeople" required />{" "}
              <span> More than three people</span>
            </div>
          </div>
          <div>
            <h3>Add the availabe list of food menu</h3>
            <div className="input-food-menu">
              <input
                {...register("enterFoodItem", { required: "fill this field" })}
                type="text"
                placeholder="enter item here"
              />
              <ErrorMessage
                errors={errors}
                name="enterFoodItem"
                render={({ message }) => <p className="formError">{message}</p>}
              />

              <select id="food-items" required>
                <option value="">per quantity </option>
                <option value="">rice</option>
                <option value="">fish</option>
                <option value="">swallow</option>
              </select>
              <span>Amount</span>
              <input
                {...register("enterPrice", { required: "input amount(₦)" })}
                type="number"
                placeholder="enter price"
              />
              <ErrorMessage
                errors={errors}
                name="enterPrice"
                render={({ message }) => <p className="formError">{message}</p>}
              />
              <button>Add</button>
            </div>
          </div>

          <div>
            <h3>Add the availabe lists of activities</h3>
            <div className="input-act-menu">
              <input
                {...register("enterActivity", { required: "fill this field" })}
                type="text"
                placeholder="enter activity here"
              />
              <ErrorMessage
                errors={errors}
                name="enterActivity"
                render={({ message }) => <p className="formError">{message}</p>}
              />
              <select id="act-items" required>
                <option value="">per go / quantity </option>
                <option value="CODM">CODM</option>
                <option value="Defcon">DEFCON</option>
                <option value="Dancing">Dancing </option>
              </select>
              <span>Amount</span>
              <input
                {...register("enterAmount", { required: "add amount(₦)" })}
                type="text"
                placeholder="enter price"
              />
              <ErrorMessage
                errors={errors}
                name="enterAmount"
                render={({ message }) => <p className="formError">{message}</p>}
              />
              <button>Add</button>
            </div>
          </div>
          <div className="event-location-description">
            <h3>Event Location</h3>
            <textarea
              {...register("enterLocationDescription", {
                required: "fill this field",
              })}
              rows={5}
              placeholder="Enter your Location description here"
            />
            <ErrorMessage
              errors={errors}
              name="enterLocationDescription"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>

          <div className="input-events-image">
            <h3>event images / flyer</h3>
            <input
              {...register("image", { required: "add image" })}
              type="file"
              placeholder="insert flyer / image"
              
            />{" "}
            <span>Attach image files</span>
            <ErrorMessage
              errors={errors}
              name="image"
              render={({ message }) => <p className="formError">{message}</p>}
            />
          </div>
          <div id="input-event-btn">
            <button className="input-event-button" type="submit">
              Create Event
            </button>
          </div>
        </form>
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
