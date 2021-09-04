import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import {} from "firebase/firestore";
import {} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: "AIzaSyCeb0rJRxG3o-TOcFAdr_9o5uffrLQXeis",
	authDomain: "inzuki-firebase.firebaseapp.com",
	projectId: "inzuki-firebase",
	storageBucket: "inzuki-firebase.appspot.com",
	messagingSenderId: "932304642703",
	appId: "1:932304642703:web:de1eac489832983adf86fa",
	measurementId: "G-6FB6R23423",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
	const citiesCol = collection(db, "cities");
	const citySnapshot = await getDocs(citiesCol);
	const cityList = citySnapshot.docs.map((doc) => doc.data());
	return cityList;
}

export default db;
