<script>
    import {PlayerName} from "./store.js"
    import {push} from 'svelte-spa-router'
    const setPlayerName = (e) => {
        console.log(e.target.value)
        PlayerName.set(e.target.value)
    }
</script>

<h1>Merry Holy Santa Chase</h1>
<img alt="santa emoji" src="../../public/santa.png"/>
<img alt="tree emoji" src="../../public/tree.png"/>
<img alt="present emoji" src="../../public/present.png"/>
<img alt="snowman emoji" src="../../public/snowman.png"/>
<div>
    <div>Bitte gib hier deinen Namen ein:</div>
    <input on:input={(e) => setPlayerName(e)}/>
    <div>Die besten Spieler kommen später in die Top-Ten!</div>
</div>
<button on:click|preventDefault={()=>push("#/game")}>Spiel starten!</button>

<style>
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
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated;                 /* Universal support since 2021   */
        image-rendering: optimize-contrast;         /* CSS3 Proposed */
    }
</style>