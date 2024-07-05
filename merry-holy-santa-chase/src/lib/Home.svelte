<script>
    import {PlayerName} from "./store.js"
    const setPlayerName = (e) => {
        console.log(e.target.value)
        PlayerName.set(e.target.value)
    }
</script>

<h1>Merry Holy Santa Chase</h1>
<div>
    <div>Bitte gib hier deinen Namen ein:</div>
    <input on:input={(e) => setPlayerName(e)}/>
    <div>Die besten Spieler kommen später in die Top-Ten!</div>
</div>
<button href="#/game">Spiel starten!</button>

<style>
    input {
        margin-top: 2em;
        margin-bottom: 2em;
    }

    button {
        margin-top: 2em;
        color: #646cff;
    }
</style>