<script>

    import {push} from "svelte-spa-router"
    import {get} from "svelte/store"
    import {CountStore, PlayerName, IsTopTen, Scores} from "./store.js"
    import Ranking from "./Ranking.svelte"

    const name = get(PlayerName)
    const count = get(CountStore)
    // const isTopTen = get(IsTopTen);
    let scores = get(Scores);
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

    scores = [...scores, gameResult]
    const topten = scores.sort((a,b) => {return b.score - a.score}).slice(0,10)
    const isTopTen = topten.some(e=>e.new === true)

</script>

<div>
    {#if topten}
        <h1>Super {name}!</h1>
        <p>Mit deinen {count} Punkten hast du es in die Top-Ten aller Spieler_innen geschafft.</p>
    {:else}
        <h1>Gut gespielt {name}</h1>
        <p>Du hast {count} Punkte erreicht. Das reicht leider nicht für die aktuelle Top-Ten.</p>
    {/if}
    <Ranking gameResult={gameResult} topten={topten}/>
    <p>Möchtest du es nochmal versuchen?</p>
    <button on:click={()=>restart("yes")}>Ja</button>
    <button on:click={()=>restart("no")}>Nein</button>
</div>