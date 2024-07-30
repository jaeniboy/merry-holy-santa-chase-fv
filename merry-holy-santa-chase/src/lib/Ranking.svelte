<script>

    export let topten

</script>


<div id="ranking">
    <h2>High-Score</h2>
    <div id="high-score">
        <table>
            {#each topten as entry, key}
            <tr id={entry.new ? "new-entry" : ""}>
                <td>{key + 1}.</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
            </tr>
            {/each}
        </table>
    </div>
</div>

<style>

    #ranking {
        width: 80%;
        max-width: 400px;
        margin: 0em 0em;
    }

    #high-score {
        margin: 0 auto;
    }

    table {
        margin: 0 auto;
        width: 100%;
    }

    td:nth-child(2) {
        text-align: left;
        padding-left: 1.5em;
    }

    #new-entry {
        color: red;
        font-weight: bold;
        animation: blink 1s none 4;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

</style>