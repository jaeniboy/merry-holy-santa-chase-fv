<script>

  // === todos ===
  // Emojis durch SVG-Grafiken ersetzen
  // Rangliste hinzufügen
  // Backend hinzufügen
  // Datenbank anschließen
  // Spielanleitung hinzufügen (evtl. mit Cookie?)
  // Impressum hinzufügen
  
  // === bugs ===
  // Hintergrundmusik nach Countdown stoppen
  // Spielfeld tatsächlich responsive machen
  // zweimaliges Klicken auf gutes Emoji funktioniert nicht (evtl. Sound zu lang)

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