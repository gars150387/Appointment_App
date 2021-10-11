import React from "react";
import { Search } from "../component/Search";
import { AddAppointment } from "../component/AddAppointment";
import { AppointmentInfo } from "../component/AppointmentInfo";
import { AppointmentData } from "../component/Data";

export const Home = props => {
	return (
		<div className="container mt-3">
			<div className="row d-inline text-center">
				<h1 className="text-5xl font-thin ml-2">
					<i
						className="far fa-calendar-times inline-block text-danger align-center"
						style={{ marginRight: "10px" }}
					/>
					Appointment App
				</h1>
			</div>
			<AddAppointment />
			<Search className="mt-4" />
			<div>
				<h2 className="text-center bg-secondary bd-rounded-solid-1px mt-4">Appointment Information</h2>
			</div>
			<>
				{AppointmentData.length > 0
					? `Total Appointments: ${AppointmentData.length}`
					: "No Appointments registered"}
				{console.log("Data", AppointmentData.length)}
			</>
			<ul className="list-group lis-group-flush">
				{AppointmentData.map(appointment => {
					console.log("appointment", appointment);
					return (
						<>
							<AppointmentInfo key={appointment.id} className="mt-2" appointment={appointment} />
						</>
					);
				})}
			</ul>
		</div>
	);
};
