<script>

    import {push} from "svelte-spa-router"
    import {get} from "svelte/store"
    import {CountStore, PlayerName} from "./store.js"
    import Ranking from "./Ranking.svelte"
    import {initializeApp} from "firebase/app";
    import {getFirestore, addDoc, collection, getDocs} from "firebase/firestore"

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

    const name = get(PlayerName)
    const count = get(CountStore) 
    const gameResult = {"name": name, "score": count, "new": true}
    const restart = (answer) => {
        CountStore.set(0)
        if (answer === "yes") {
            push("/game");
        } else {
            PlayerName.set("")
            push("/")
        }
    }
    
    const getDataFromDb = async () => {

        // get scores from database
        const querySnapshot = await getDocs(collection(db, "userscores"));
        const userScores = querySnapshot.docs.map((d) => d.data())
        console.log(userScores)

        // compute top ten high score
        const scores = [...userScores, gameResult]
        const topTen = scores.sort((a,b) => {return b.score - a.score}).slice(0,10)
        const isTopTen = topTen.some(e=>e.new === true)

        // write game result to database
        const docRef = await addDoc(collection(db, "userscores"), {...gameResult, "new": false})
        console.log("Game result written to database with ID: ", docRef.id);

        return {topTen, isTopTen}
    }

</script>

<div>

    {#await getDataFromDb()}
        ... warte auf das Resultat
    {:then result}
        {#if result.isTopTen}
            <h1>Super {name}!</h1>
            <p>Mit deinen {count} Punkten hast du es in die Top-Ten aller Spieler_innen geschafft.</p>
        {:else}
            <h1>Schade {name}</h1>
            <p>Du hast {count} Punkte erreicht. Das reicht leider nicht für die aktuelle Top-Ten.</p>
        {/if}
        <Ranking gameResult={gameResult} topten={result.topTen}/>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await }
    <p>Möchtest du es nochmal versuchen?</p>
    <button on:click={()=>restart("yes")}>Ja</button>
    <button on:click={()=>restart("no")}>Nein</button>
</div>