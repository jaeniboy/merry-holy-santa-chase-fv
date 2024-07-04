<script>

    import {push} from "svelte-spa-router"
    import {get} from "svelte/store"
    import {CountStore, PlayerName} from "./store.js"
    import Ranking from "./Ranking.svelte"

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
</script>

<div>
<h1>Gut gespielt {name}!</h1>
    <p>Du hast {count} Punkte erreicht. Das reicht leider nicht für die aktuelle Top-Ten. </p>
    <Ranking gameResult={gameResult}/>
    <p>Möchtest du es nochmal versuchen?</p>
    <button on:click={()=>restart("yes")}>Ja</button>
    <button on:click={()=>restart("no")}>Nein</button>

</div>