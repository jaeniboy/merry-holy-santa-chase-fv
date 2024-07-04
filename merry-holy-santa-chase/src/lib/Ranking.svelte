<script>

    let scores = [
        {"name":"Gisi","score": 34, "new": false},
        {"name":"Michael","score": 45, "new": false},
        {"name":"Miriam","score": 64, "new": false},
        {"name":"Lucy","score": 23, "new": false},
        {"name":"Elli","score": 56, "new": false},
        {"name":"Gerd","score": 34, "new": false},
        {"name":"Hans","score": 14, "new": false},
        {"name":"Gabi","score": 55, "new": false},
    ]
    
    export let gameResult
    scores = [...scores, gameResult]

    const ranking = scores.sort((a,b) => {return b.score - a.score})

</script>


<div>
    <h2>High-Score</h2>
    <div id="high-score">
        <table>
            {#each ranking as entry, key}
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

    #high-score {
        margin: 0 auto;
        width: 60%;
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