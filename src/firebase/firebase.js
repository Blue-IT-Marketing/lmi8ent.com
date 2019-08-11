import firebase from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBGN8VRNLeg3hg0ZYKORHVocjWlC1e4ye4",
    authDomain: "sabina-plaza.firebaseapp.com",
    databaseURL: "https://sabina-plaza.firebaseio.com",
    projectId: "sabina-plaza",
    storageBucket: "",
    messagingSenderId: "16238135105",
    appId: "1:16238135105:web:8b129d8a7d8c00a2"
};


try{
	!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
}catch (e) {
	console.log('firebase app already configured');
}


const auth = firebase.auth();




export {auth,
	firebase
};