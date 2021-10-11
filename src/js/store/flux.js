import { Data } from "../component/Data";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Data: Data
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().push();
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const remindData = store.Data.map((element, index) => {
					if (index === index) element.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
