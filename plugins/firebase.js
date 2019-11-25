import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDaOeTtloCcWGB2EygcPP5jATe49eAk5eo",
      authDomain: "neopano.firebaseapp.com",
      databaseURL: "https://neopano.firebaseio.com",
      projectId: "neopano",
      storageBucket: "neopano.appspot.com",
      messagingSenderId: "496147084208",
      appId: "1:496147084208:web:28ed1fcc74c75c9ab71c75"
    }
  )
}

export default firebase
