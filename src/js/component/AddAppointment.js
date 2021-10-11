import React, { useState } from "react";
import { AppointmentData } from "./Data";

export const AddAppointment = () => {
	const [toggle, setToggle] = useState(toggle);
	return (
		<div>
			<button className="col-12 rounded bd-solid-black bg-blue" onClick={() => setToggle(!toggle)}>
				<div>
					<i className="fas fa-calendar-plus inline-block align-text-top" /> Add Appointment
				</div>
			</button>
			{toggle ? (
				<div className="col-12 bd-rounded-2 bd-b-2 bd-l-2 bd-light-blue rounded-b-md pl-4 pr-4 pb-4">
					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Owner Name
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								type="text"
								name="ownerName"
								id="ownerName"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Pet Name
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								type="text"
								name="petName"
								id="petName"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Apt Date
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								type="date"
								name="aptDate"
								id="aptDate"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Apt Time
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<input
								type="time"
								name="aptTime"
								id="aptTime"
								className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					</div>

					<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
						<label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
							Appointment Notes
						</label>
						<div className="mt-1 sm:mt-0 sm:col-span-2">
							<textarea
								id="aptNotes"
								name="aptNotes"
								rows="3"
								className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
								placeholder="Detailed comments about the condition"
							/>
						</div>
					</div>

					<div className="pt-5">
						<div className="flex justify-end">
							<button type="submit" className="ml-3 inline-flex justify-center bg-success">
								Submit
							</button>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};
