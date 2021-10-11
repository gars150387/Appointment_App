const appointment = require("./component/Data");
const firebase = require("firebase");
const { promise } = require("remote-origin-url");
const fetch = require ("node-fetch")
require("firebase/firestore")

let appointment= [];
var firebaseConfig = {
    aapiKey: "AIzaSyBjHGJzRvim1btmyc6MkRVj0s05ngzNjfQ",
	authDomain: "appointment-app-4efca.firebaseapp.com",
	projectId: "appointment-app-4efca",
	storageBucket: "appointment-app-4efca.appspot.com",
	messagingSenderId: "662205160586",
	appId: "1:662205160586:web:8b5cd36d53c7c0fe30a173"};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const populateFirebase=(collectionName, items)=>{
    return Promise.all(
        items && items.map((item)=>{
            const {id,...data}= item;
            return db.collection(collectionName).doc(id).set(data)
        })
    )

}
Promise.all([
    populateFirebase("parks", parks)
]).then(()=> {
    console.log("done")
    process.exit(0)
}).catch ((err)=> console.log(err))
