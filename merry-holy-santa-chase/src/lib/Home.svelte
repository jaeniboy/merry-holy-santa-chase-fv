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
<img alt="ghost emoji" src="../../public/ghost.png"/>
<img alt="pig emoji" src="../../public/pig.png"/>
<img alt="shark emoji" src="../../public/shark.png"/>
<img alt="sunglasses emoji" src="../../public/sunglasses.png"/>
<img alt="wrench emoji" src="../../public/wrench.png"/>
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
    }
</style>