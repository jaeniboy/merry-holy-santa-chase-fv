<script>
    import {push} from "svelte-spa-router"
</script>

<div id="flexbox-wrapper">
    <div>
        <p>IDEE UND UMSETZUNG:</p>
        <p>Jani, der kleine Weihnachtswichtel</p>
    </div>
    <div>
        <p>MUSIK:<p/>
        <p><a href="https://freemusicarchive.org/music/Nullsleep/The_8bits_of_Christmas/8bp038-02-nullsleep-silent_night/">Silent night</a> by Nullsleep. (Lizenz: <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/">CC BY-NC-ND 3.0</a>)</p>
    </div>
    <div>
        <p>SCHRIFTART:</p>
        <p><a href="https://www.1001fonts.com/kongtext-font.html">Kongtext</a> by codeman38. (Lizenz: <a href="https://st.1001fonts.net/license/kongtext/license.txt">custom</a>)</p>
    </div>
    <div>
        <p>EMOJIS:</p>
        <p><a href="https://openmoji.org/">OpenMoji</a> changed to Pixelart. (Lizenz: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>)</p>
    </div>
    <button on:click={()=>push("/")}>Zurück zum Start</button>
</div>

<style>
    p:first-child {
        color: red;
    }

    button {
        margin-top: 3em;
    }
</style>

