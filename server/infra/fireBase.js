var firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyATJ8CGzTz7bbdHddJOHkoT0EKzIq4OIbw",
    authDomain: "chat-bot-tai.firebaseapp.com",
    projectId: "chat-bot-tai",
    storageBucket: "chat-bot-tai.appspot.com",
    messagingSenderId: "526270677505",
    appId: "1:526270677505:web:ed291124c7aec3f5d3f600",
    measurementId: "G-L5CFTH9NDN",
    databaseURL: "https://chat-bot-tai-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig)

let database = firebase.firestore()

module.exports =database


