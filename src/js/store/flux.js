import { Data } from "../component/Data";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Data: []
		},
		actions: {
			addAppointmentDetail: (petName, ownerName, aptDate, aptTime, aptNotes) => {
				Data.push(petName, ownerName, aptDate, aptTime, aptNotes);
			}
		}
	};
};

export default getState;
