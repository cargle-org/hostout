import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { text } from "stream/consumers";
import AppContext from "../context/AppContext";
import { success, error } from "../helpers/Alert";
import axios from "axios";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloudinaryUpload from "../middlewares/CloudinaryUpload";
import { IconButton } from "@mui/material";

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

	const { newEventLoading, setNewEventLoading } = useContext(AppContext);

	let SN = 0;

	const [eventProgramme, setEventProgramme] = useState([]);
	const [eventTags, setEventTags] = useState([]);
	const [eventMenu, setEventMenu] = useState([]);
	const [activityList, setActivityList] = useState([]);
	const [eventImages, setEventImages] = useState([]);
	const [showCreateBtn, setShowCreateBtn] = useState(false);
	const [files, setFiles] = useState([]);
	const [selectedFiles, setSelectedFiles] = useState(null);

	const [newEvent, setNewEvent] = useState({
		name: "",
		image: [],
		event_programme: [],
		time: "",
		date: "",
		location: "",
		event_type: "Private",
		event_fee: 0,
		tags: [],
		menu: [],
		additional_activities: [],
	});
	console.log("newEvent", newEvent);

	const onchangeHandler = (e) => {
		e.persist();
		setNewEvent((item) => ({
			...item,
			[e.target.name]: e.target.value,
		}));
	};

	// Event programme handler
	const eventProgrammeHandler = async (e) => {
		try {
			e.persist();
			const event = document.getElementById(
				"event_programme"
			) as HTMLInputElement | null;

			setEventProgramme([...eventProgramme, event.value]);
		} catch (error) {
			console.log(
				"🚀 ~ file: eventsinput.tsx ~ line 74 ~ eventProgrammeHandler ~ error",
				error
			);
		}
	};

	// Event tags handler
	const eventTagsHandler = async (e) => {
		try {
			e.persist();
			const event = document.getElementById("tags") as HTMLInputElement | null;

			setEventTags([...eventTags, event.value]);
		} catch (error) {
			console.log(
				"🚀 ~ file: eventsinput.tsx ~ line 96 ~ eventTagsHandler ~ error",
				error
			);
		}
	};

	// Event Menu handler
	const eventMenuHandler = async (e) => {
		try {
			e.persist();
			const event = document.getElementById("menu") as HTMLInputElement | null;
			setEventMenu([...eventMenu, event.value]);
		} catch (error) {
			console.log(
				"🚀 ~ file: eventsinput.tsx ~ line 107 ~ eventMenuHandler ~ error",
				error
			);
		}
	};

	// Additional activities
	const onActivitiesChangeHandler = (e) => {
		try {
			e.persist();
			const activity_name = document.getElementById(
				"activity_name"
			) as HTMLInputElement | null;
			const description = document.getElementById(
				"description"
			) as HTMLInputElement | null;
			const price = document.getElementById("price") as HTMLInputElement | null;

			const newActivity = {
				activity_name: activity_name.value,
				description: description.value,
				price: price.value,
			};

			setActivityList([...activityList, newActivity]);
		} catch (error) {
			console.log("onActivitiesChangeHandler ~ error", error);
		}
	};

	// media upload handler
	const onMediaChangeHandler = async (e) => {
		try {
			setNewEventLoading(true);
			e.persist();
			const file = document.getElementById("image") as HTMLInputElement | null;

			const media = await CloudinaryUpload(file.files[0]);
			setEventImages([...eventImages, media]);
			setNewEventLoading(false);
		} catch (error) {
			setNewEventLoading(false);
			console.log(
				"🚀 ~ file: eventsinput.tsx ~ line 127 ~ onMediaChangeHandler ~ error",
				error
			);
		}
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
						// Authorization: `Bearer ${localStorage.getItem("hostout-token")}`,
						Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmU3NmEyYjViOWQzNWZmMmU4MjhjMiIsImlhdCI6MTY2ODE4NDIwNCwiZXhwIjoxNjY4MjcwNjA0fQ.HvYaem-OuE3PgHBJB9LDH6s8RLQQZqzTdykoLE17fbw`,
					},
				}
			);
			console.log(
				"🚀 ~ file: eventsinput.tsx ~ line 60 ~ submit ~ response",
				response
			);
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
	// programme
	useEffect(() => {
		setNewEvent((item) => ({
			...item,
			event_programme: eventProgramme,
		}));
	}, [eventProgramme]);

	// tags
	useEffect(() => {
		setNewEvent((item) => ({
			...item,
			tags: eventTags,
		}));
	}, [eventTags]);

	// menu
	useEffect(() => {
		setNewEvent((item) => ({
			...item,
			menu: eventMenu,
		}));
	}, [eventMenu]);

	// additional activities
	useEffect(() => {
		setNewEvent((item) => ({
			...item,
			additional_activities: activityList,
		}));
	}, [activityList]);

	// Images
	useEffect(() => {
		setNewEvent((item) => ({
			...item,
			image: eventImages,
		}));
	}, [eventImages]);

	// show button to create event only after form has been filled
	useEffect(() => {
		setShowCreateBtn(!showCreateBtn);
	}, [newEvent.image]);

	return (
		<div>
			<Head>
				<title>Hostout</title>
				<meta name="description" content="Host and find events near you" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />

			<form onSubmit={submit}>
				<div className="form-input">
					<div id="About-event">
						<h2>Host an event</h2>
					</div>

					{/* name */}
					<div className="form-event">
						<div className="form-event-title">
							<h3>Name*</h3>
							<input
								type="text"
								placeholder="Enter Event Name"
								id="name"
								name="name"
								className="form-event-input"
								style={{ width: "100%" }}
								onChange={onchangeHandler}
								required
								defaultValue={newEvent.name}
							/>
						</div>
						{/* this is where i added stuff */}
						<div className="form-event-title">
							<h3>Date*</h3>
							<input
								{...register("enterEventName", {
									required: "Input event name.",
								})}
								type="date"
								placeholder="Enter Event Title"
								id="eventName"
								className="form-event-input"
								style={{ width: "100%", paddingRight: "2%" }}
							/>

							<ErrorMessage
								errors={errors}
								name="enterEvent"
								render={({ message }) => <p className="formError">{message}</p>}
							/>
						</div>

						<div className="form-event-title">
							<h3>Location*</h3>
							<input
								{...register("enterEventName", {
									required: "Input event name.",
								})}
								type="text"
								placeholder="Enter Event Location"
								id="eventName"
								className="form-event-input"
								style={{ width: "100%" }}
							/>

							<ErrorMessage
								errors={errors}
								name="enterEvent"
								render={({ message }) => <p className="formError">{message}</p>}
							/>
						</div>

						<div className="form-event-title">
							<h3>Program*</h3>
							<input
								{...register("enterEventName", {
									required: "Input event name.",
								})}
								type="text"
								placeholder="Enter Event Program"
								id="eventName"
								className="form-event-input"
								style={{ width: "100%" }}
							/>

							<ErrorMessage
								errors={errors}
								name="enterEvent"
								render={({ message }) => <p className="formError">{message}</p>}
							/>
						</div>

						{/* location */}
						{/* <div className="form-event-title">
							<h3>Location*</h3>
							<input
								{...register("enterEventName", {
									required: "Input event name.",
								})}
								type="text"
								placeholder="Event Location"
								id="location"
								name="location"
                className="form-event-input"
                style={{width: "100%"}}
								onChange={onchangeHandler}
								required
								defaultValue={newEvent.location}
							/>
						</div> */}

						{/* event type, event fee */}
						<div className="input-container">
							{/* event_type */}
							<div className="form-event-category">
								<h3>Type*</h3>
								<select
									name="event_type"
									id="event_type"
									required
									defaultValue={newEvent.event_type}
								>
									<option value="">Select event type</option>
									<option value="private">Private</option>
									<option value="public">Public</option>
								</select>
							</div>

							{/* event_fee */}
							<div className="form-event-price">
								<h3>Price</h3>
								<input
									type="number"
									placeholder="Amount"
									id="event_fee"
									name="event_fee"
									className="form-event-input"
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
								<input
									type="text"
									placeholder="Enter tag name"
									id="tags"
									name="tags"
									style={{ width: "83%" }}
									className="form-event-input"
									required
								/>
								<button onClick={eventTagsHandler}>Add tag</button>
								<br />
								<ul
									style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
								>
									{eventTags.map((event, i) => (
										<li
											key={i}
											style={{ marginLeft: "5%", listStyleType: "none" }}
										>
											#{event}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* menu */}
						<div className="person-container-info">
							<h3>Add to event menu</h3>
							<div className="person-name-info-2">
								<input
									type="text"
									placeholder="Enter menu item name"
									id="tags"
									name="tags"
									className="form-event-input"
									required
								/>
								<button onClick={eventMenuHandler}>Add to menu</button>
								<br />
								<ul>
									{eventMenu.map((event, i) => (
										<li key={i}>{event}</li>
									))}
								</ul>
							</div>
						</div>

						{/* Additional activities */}
						<div className="person-container-info">
							<h3>Add the availabe lists of activities</h3>
							<div className="input-act-menu">
								{/* activity_name */}

								<div className="set">
									<span>Activity name</span>
									<input
										type="text"
										placeholder="Enter activity here"
										id="activity_name"
										name="activity_name"
										required
									/>
								</div>

								{/* description */}
								<div className="set">
									<span>Description</span>
									<input
										type="textarea"
										placeholder="enter description"
										id="description"
										name="description"
										required
									/>
								</div>

								{/* price */}
								<div className="set">
									<span>Amount</span>
									<input
										type="text"
										placeholder="enter price"
										id="price"
										name="price"
										required
									/>
								</div>
								<div className="button">
									<button onClick={onActivitiesChangeHandler}>
										Add activity
									</button>
								</div>
							</div>
						</div>

						{/* image */}
						<div
							className="input-events-image"
						>
							<h3>Upload images and flyers</h3>
							<div className="upload">
								<input
									type="file"
									placeholder="insert flyer / image"
									id="image"
									name="image"
									multiple
									required
								/>
								<button onClick={onMediaChangeHandler}>Add Image</button>
							</div>

							<br />
							<ul>
								{eventImages.map((event, i) => (
									<li key={i}>{event.split("image")[1]}</li>
								))}
							</ul>
						</div>

						<div id="input-event-btn">
							{newEventLoading ? (
								""
							) : (
								<button
									className="input-event-button"
									type="submit"
									style={{ width: "100%" }}
								>
									Create Event
								</button>
							)}
						</div>
					</div>
				</div>
			</form>
			<Footer />
		</div>
	);
};
export default Eventsinput;
