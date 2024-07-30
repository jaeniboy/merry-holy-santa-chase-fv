<script>
    import {push} from "svelte-spa-router"
</script>

<div id="flexbox-wrapper">
    <div>
        <p>IDEE UND UMSETZUNG:</p>
        <p>Jani, der kleine Weihnachtswichtel</p>
    </div>
    <div>
        <p>MUSIK UND SOUNDEFFEKTE:<p/>
        <p>"Stille Nacht" und anderer Sound-Trash von SantaSeipel via <a href="https://www.beepbox.co/">BeepBox</a> </p>
    </div>
    <div>
        <p>SCHRIFTART:</p>
        <p><a href="https://www.1001fonts.com/kongtext-font.html">Kongtext</a> von codeman38. (Lizenz: <a href="https://st.1001fonts.net/license/kongtext/license.txt">hier</a>) - <br />Ä,Ö und Ü hat allerdings der Weihnachtsmann gebracht ;)</p>
    </div>
    <div>
        <p>EMOJIS:</p>
        <p><a href="https://openmoji.org/">OpenMoji</a> (Lizenz: <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>) - <br />durch ein Weihnachtswunder im Pixelart-Design.</p>
    </div>
    <button on:click={()=>push("/")}>Zurück zum Start</button>
</div>

<style>

    #flexbox-wrapper div {
        max-width: 90vw;
    }

    p:first-child {
        color: red;
    }

    button {
        margin-top: 3em;
    }
</style>

