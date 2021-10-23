import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { enableIndexedDbPersistence } from "firebase/firestore";
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
// import {} from "firebase/auth";

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

enableIndexedDbPersistence(db).catch((err) => {
	if (err.code == "failed-precondition") {
		// Multiple tabs open, persistence can only be enabled in one tab at a a time.
	} else if (err.code == "unimplemented") {
		// The current browser does not support all of the features required to enable persistence
	}
}); // Subsequent queries will use persistence, if it was enabled successfully

//> const firestoreDb = initializeFirestore(app, {
//> 	cacheSizeBytes: CACHE_SIZE_UNLIMITED,
//> });

export default db;
