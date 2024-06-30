<script>

  // === todos ===
  // Emojis durch SVG-Grafiken ersetzen
  // Rangliste hinzufügen
  // Hintergrundmusik hinzufügen
  // Backend hinzufügen
  // Datenbank anschließen
  // Spielanleitung hinzufügen (evtl. mit Cookie?)
  
  // === bugs ===
  // Spielfeld tatsächlich responsive machen
  // zweimaliges Klicken auf gutes Emoji funktioniert nicht (evtl. Sound zu lang)

  import Router from 'svelte-spa-router'
  import Home from "./lib/Home.svelte"
  import Game from "./lib/Game.svelte"
  import Gameover from "./lib/Gameover.svelte"

  const routes = {
    '/': Home,
    '/game': Game,
    '/gameover': Gameover,
  }
</script>

<main>
  <Router {routes}/>
</main>