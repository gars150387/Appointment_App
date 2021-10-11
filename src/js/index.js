//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";
const firebaseConfig = {
	apiKey: "AIzaSyBjHGJzRvim1btmyc6MkRVj0s05ngzNjfQ",
	authDomain: "appointment-app-4efca.firebaseapp.com",
	projectId: "appointment-app-4efca",
	storageBucket: "appointment-app-4efca.appspot.com",
	messagingSenderId: "662205160586",
	appId: "1:662205160586:web:8b5cd36d53c7c0fe30a173"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

//import your own components
import Layout from "./layout";
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
