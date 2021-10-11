import React, { useState } from "react";
import PropTypes from "prop-types";

export const AppointmentInfo = ({ appointment }) => {
	return (
		<div className="mt-2 mb-2">
			<li className="list-group-item d-flex justify-content-between">
				<div>
					<b>Pet: </b>
					{appointment.petName}
				</div>
				<button
					type="button"
					className="p-1.5 mr-1.5 mt-1 rounded text-white bg-danger hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
					<i className="fas fa-trash" />
				</button>
			</li>
			<li className="list-group-item">
				<b>Date: </b>
				{appointment.aptDate}
			</li>
			<li className="list-group-item">
				<b>Owner: </b>
				{appointment.ownerName}
			</li>
			<li className="list-group-item">
				<b>Notes: </b>
				{appointment.aptNotes}
			</li>
		</div>
	);
};

AppointmentInfo.propTypes = {
	appointment: PropTypes.object,
	onDeleteAppointment: PropTypes.func
};
