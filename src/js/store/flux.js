import { Data } from "../component/Data";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			appointmentData: Data
		},
		actions: {
			addAppointmentDetail: (petName, ownerName, aptDate, aptTime, aptNotes) => {
				let data1 = [];
				data1.push(petName, ownerName, aptDate, aptTime, aptNotes);
				console.log("new appointment", data1);
			}
		}
	};
};

export default getState;
