<script>
    import {push} from "svelte-spa-router"
</script>

<div id="flexbox-wrapper">
    <p>MUSIC: <a href="https://freemusicarchive.org/music/Nullsleep/The_8bits_of_Christmas/8bp038-02-nullsleep-silent_night/">Silent night</a> by Nullsleep. License: <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/">CC BY-NC-ND 3.0</a></p>
    <p>FONT: <a href="https://www.1001fonts.com/kongtext-font.html">Kongtext</a> by codeman38. License: <a href="https://st.1001fonts.net/license/kongtext/license.txt">custom</a></p>
    <p>EMOJIS: <a href="https://openmoji.org/">OpenMoji</a> changed to Pixelart. License: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></p>
    <button on:click={()=>push("/")}>Zurück zum Start</button>
</div>

<style>
    button {
        margin-top: 3em;
    }

</style>

