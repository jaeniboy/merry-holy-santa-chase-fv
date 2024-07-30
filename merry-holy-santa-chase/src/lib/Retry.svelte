<script>

    import {push} from "svelte-spa-router"
    import {CountStore, ScoreID} from "./store.js"
    import {onDestroy} from 'svelte'

    let browserNavigation = true

    const restart = (answer) => {
        CountStore.set(0)
        ScoreID.set("")
        if (answer === "yes") {
            push("/");
        } else {
            browserNavigation = false
            push("/credits")
        }
    }

    onDestroy(()=>{
        if (browserNavigation) {
            push("/")
        }
    })
</script>

<p>Möchtest du es nochmal versuchen?</p>
<div>
    <button on:click={()=>restart("yes")}>Ja</button>
    <button on:click={()=>restart("no")}>Nein</button>
</div>