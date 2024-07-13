<script>

  // === todos ===
  // Speed-Up-Interval ändern
  // Spielanleitung hinzufügen (evtl. mit Cookie?)
  // Impressum mit Credits hinzufügen
  // Username auf 10 Zeichen begrenzen
  
  // === bugs ===
  // Spielfeld tatsächlich responsive machen
  // Reset des Punktestandes funktioniert nicht richtig

  import Router from 'svelte-spa-router'
  import Intro from "./lib/Intro.svelte"
  import Home from "./lib/Home.svelte"
  import Game from "./lib/Game.svelte"
  import Gameover from "./lib/Gameover.svelte"
  import Credits from "./lib/Credits.svelte"

  const routes = {
    '/': Home,
    '/intro': Intro,
    '/game': Game,
    '/gameover': Gameover,
    '/credits': Credits,
  }
</script>

<main>
  <Router {routes}/>
</main>

<style>
  main {
    /* padding: 0.5em; */
  }
</style>