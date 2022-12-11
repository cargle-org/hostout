import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const AddCard = () => {
	return (
		<div className="add__card">
			<div className="add__card__circle">
				<Link href="/eventsinput">
					<AddIcon className="add__card_icon" />
				</Link>
			</div>
			<h2 className="add__card__text">Host a new event</h2>
		</div>
	);
};

export default AddCard;
