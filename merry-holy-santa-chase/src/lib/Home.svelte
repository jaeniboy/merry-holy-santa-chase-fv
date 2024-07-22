<script>
    import {get} from "svelte/store";
    import {PlayerName} from "./store.js"
    import {HasVisited} from "./store.js"
    import {push} from 'svelte-spa-router'
    import treeImage from '/tree.png'
    import santaImage from '/santa.png'

    const hasVisited = get(HasVisited)
    const playerName = get(PlayerName)

    !hasVisited && push("/intro")

    const setPlayerName = (e) => {
        console.log(e.target.value)
        PlayerName.set(e.target.value)
    }

</script>
<main>
    <div id="flexbox-wrapper">
        <h1>FANG DEN SANTA!</h1>
        <div>
            <img alt="tree emoji" src="{treeImage}"/>
            <img alt="santa emoji" src="{santaImage}"/>
            <img alt="tree emoji" src="{treeImage}"/>
        </div>
        <div>
            <div>Bitte gib hier deinen Namen ein:</div>
            <input on:input={(e) => setPlayerName(e)} value={playerName} maxlength="12"/>
            <!-- <div>Die besten Spieler kommen später in die Top-Ten!</div> -->
        </div>
        <button on:click|preventDefault={()=>push("#/game")}>Spiel starten!</button>
        <button on:click|preventDefault={()=>push("#/intro")}>Hä? Erklärs mir nochmal...</button>
    </div>
</main>

<style>

    /* main {
        padding: 0.5em;
    } */

    input {
        margin-top: 2em;
        margin-bottom: 2em;
    }

    button {
        margin-top: 2em;
        color: #646cff;
    }

    img {
        width: 64px;
        margin-bottom: 2em;
    }

    h1 {
        color: red;
        text-shadow: 4px 4px gray;
    }


</style>