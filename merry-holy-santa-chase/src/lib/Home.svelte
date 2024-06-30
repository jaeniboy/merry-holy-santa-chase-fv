<script>
    import {PlayerName} from "./store.js"
    const setPlayerName = (e) => {
        console.log(e.target.value)
        PlayerName.set(e.target.value)
    }
</script>

<h1>Merry Holy Santa Chase</h1>
<div>
    <label>Bitte gib hier deinen Namen ein:</label>
    <input on:input={(e) => setPlayerName(e)}/>
</div>
<a href="#/game">Spiel starten!</a>