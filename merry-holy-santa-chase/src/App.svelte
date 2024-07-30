<script>

  // === todos ===
  // * Funkel-Glitzer-Sterne-Hintergrund
  
  // === bugs ===
  // * doppeltes Anzeigen von Spielernamen als new
  // * plötzliche Rückkehr zum Startbildschirm
  // * wiredes Verhalten beim erstmaligen Starten der App

  import Router from 'svelte-spa-router'
  import Intro from "./lib/Intro.svelte"
  import Home from "./lib/Home.svelte"
  import Game from "./lib/Game.svelte"
  import Gameover from "./lib/Gameover.svelte"
  import Credits from "./lib/Credits.svelte"

  import {initializeApp} from "firebase/app";
  import {getFirestore, addDoc, collection} from "firebase/firestore"


  const firebaseConfig = {
        apiKey: "AIzaSyBpOgtLkUIXsLaHmqZHoqVV_0D3dCfVlVk",
        authDomain: 'merry-holy-santa-chase.firebaseapp.com',
        projectId: 'merry-holy-santa-chase',
        storageBucket: 'merry-holy-santa-chase.appspot.com',
        messagingSenderId: '1050325198070',
        appId: '1:1050325198070:web:2efd1e961bf1c135af38d7',
    };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const routes = {
    '/': Home,
    '/intro': Intro,
    '/game': Game,
    '/gameover': Gameover,
    '/credits': Credits,
  }

  // error logs
  window.onerror =  
    async function (msg, source, lineNo, columnNo, error) { 
      alert(msg)
      const errorData = {
        "message": msg,  
        "source": source, 
        "line": lineNo,  
        "col": columnNo,
        "timestamp": Date.now()
      }; 
          
      const docRef = await addDoc(collection(db, "errorlogs"), {errorData})
      console.log(`error written to server with id ${docRef.id}`)

      return true; 
  }; 

  window.onunhandledrejection = async function(errorEvent) {
    console.log('onunhandledrejection handler logging error', errorEvent);

    const errorData = {
        "source": errorEvent.reason.fileName, 
        "line": errorEvent.reason.lineNumber,  
        "col": errorEvent.reason.columnNumber,
        "message": errorEvent.reason.message,
        "timestamp": Date.now()
      }; 

    const docRef = await addDoc(collection(db, "errorlogs"), {errorData})
    console.log(`rejection error written to server with id ${docRef.id}`)

    return true;
  }

</script>

<main>
  <Router {routes}/>
</main>