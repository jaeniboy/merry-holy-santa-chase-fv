<script>

  // === todos ===
  // Emojis durch SVG-Grafiken ersetzen
  // Backend hinzufügen
  // Datenbank anschließen
  // Spielanleitung hinzufügen (evtl. mit Cookie?)
  // Impressum mit Credits hinzufügen
  // Username auf 10 Zeichen begrenzen
  
  // === bugs ===
  // Spielfeld tatsächlich responsive machen

  import Router from 'svelte-spa-router'
  import Home from "./lib/Home.svelte"
  import Game from "./lib/Game.svelte"
  import Gameover from "./lib/Gameover.svelte"
  import Credits from "./lib/Credits.svelte"

  const routes = {
    '/': Home,
    '/game': Game,
    '/gameover': Gameover,
    '/credits': Credits,
  }
</script>

<main>
  <Router {routes}/>
</main>