<script>

import {initializeApp} from "firebase/app";
import {getFirestore, doc, getDocs, deleteDoc, collection} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {push} from "svelte-spa-router"

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
const auth = getAuth(app)

auth.currentUser == null && push("/login")

const deleteUserScore = () => {
    auth.currentUser != null && deleteCollectionDocs("userscores")
}

const deleteErrorLogs = () => {
    auth.currentUser != null && deleteCollectionDocs("errorlogs")
}

const deleteCollectionDocs = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.docs.map(async (d) => {await deleteDoc(doc(db, collectionName, d.id))});
    alert(`Documents from collection ${collectionName} deleted`)
}

const conf = (name,func) => {
    if (confirm(`${name} wirklich löschen?`)) {
        func();
    }
}

</script>

<div>
    <h1>This is the admin page</h1>
    <button on:click={()=>conf("userscores", deleteUserScore)}>Lösche User-Score</button>
    <button on:click={()=>conf("errorlogs", deleteErrorLogs)}>Lösche Error logs</button>
</div>