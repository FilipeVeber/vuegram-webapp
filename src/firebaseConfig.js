import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD3cah5h1Tc_mwmifwlvEzmz7Un-aUUbJo",
    authDomain: "savvy-project-c8463.firebaseapp.com",
    databaseURL: "https://savvy-project-c8463.firebaseio.com",
    projectId: "savvy-project-c8463",
    storageBucket: "savvy-project-c8463.appspot.com",
    messagingSenderId: "815465239689"
};

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
