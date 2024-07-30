<script>

  /* Images */
  import treeImage from '/tree.png'
  import santaImage from '/santa.png'
  import presentImage from '/present.png'
  import snowmanImage from '/snowman.png'
  import sharkImage from '/shark.png'
  import pigImage from '/pig.png'
  import wrenchImage from '/wrench.png'
  import sunglassesImage from '/sunglasses.png'
  import pizzaImage from '/pizza.png'
  import ghostImage from '/ghost.png'
  import chickImage from '/chick.png'
  import ballImage from '/ball.png'
  import cactusImage from '/cactus.png'
  import islandImage from '/island.png'

  /* Sounds */
  import dingSound from '/ding_a.mp3'
  import errorSound from '/error.mp3'
  import silentNightSound from '/silent_night.mp3'

  /* Images */
  const goodEmojis = [
    santaImage,
    treeImage,
    presentImage,
    snowmanImage,
  ]
  const badEmojis = [
    sharkImage,
    pigImage,
    wrenchImage,
    sunglassesImage,
    pizzaImage,
    ghostImage,
    chickImage,
    ballImage,
    cactusImage,
    islandImage
  ]
  const allEmojis = [...goodEmojis, ...badEmojis]

  // game settings
  const numFields = 35
  const fields = [...Array(numFields).keys()];
  let currentFieldID = Number;
  let interval = 1200
  const minInterval = 600
  let speedUpCounter = 0
  const speedUpInterval = 5
  let stopped = false
  
  /* sound effects and background music */
  const soundSuccess = new Audio(dingSound)
  const soundError = new Audio(errorSound)
  const speedInterval = 0.2;
  const maxSpeed = 2;
  const backgroundMusic = new Audio(silentNightSound)
  backgroundMusic.volume = 0.6;
  backgroundMusic.loop = true;
  backgroundMusic.play()
  
  import Counter from "./Counter.svelte"
  let counter;

  import Countdown from "./Countdown.svelte"
  import { onDestroy } from 'svelte'
  import { ScoreInDb, CountStore } from "./store"
  ScoreInDb.set(false)
  CountStore.set(0)

  const preload = src => new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = src
  })

  const preloadAll = async srcs => Promise.all(srcs.map(preload))

  const getEmoji = () => {
    const rand = Math.random();
    const emojis = rand >= 0.5 ? goodEmojis : badEmojis;
    const randIndex = Math.floor(Math.random() * emojis.length);
    return `<img class="emoji" data-kind=${rand >= 0.5 ? "good" : "bad"} src=${emojis[randIndex]}>`
  }

  const showEmoji = () => {
    let newFieldID //= Number;
    // avoid field repetition
    while (true) {
      newFieldID = Math.floor(Math.random() * numFields);
      if (newFieldID != currentFieldID) {
        break;
      }
    }
    currentFieldID = newFieldID
    clearFields()

    const fieldSelected = document.getElementById(String(newFieldID));
    if (fieldSelected !== null) {
      fieldSelected.innerHTML = getEmoji();
      fieldSelected.children[0].onclick = (e) => {
        const emoji = e.target.dataset.kind
        if (emoji === "good") {
          soundSuccess.pause();
          soundSuccess.currentTime = 0;
          soundSuccess.play();
          counter.increment();
          setInterval();
        } else if (emoji === "bad") {
          soundError.pause();
          soundError.currentTime = 0;
          soundError.play();
          counter.decrement();
        }
        e.target.parentNode.innerHTML = "";
        e.target.onclick = null;
      }
    } else {
      console.log("fieldSelected is null, but who cares!")
    }
}

  const clearFields = () => {
    const allFields = document.getElementsByClassName("game-field")
    for (const field of allFields) {
      field.innerText = "";
      field.onclick = null;
    }
  }

  const speedUpMusic = () => {
    const pr = backgroundMusic.playbackRate
    backgroundMusic.playbackRate = pr + speedInterval;
  }

  const stopMusic = () => {
    backgroundMusic.pause()
  }

  const setInterval = () => {
    speedUpCounter++
    if (interval > minInterval && speedUpCounter === speedUpInterval) {
      interval -= 100;
      speedUpCounter = 0
      speedUpMusic();
    }
  }

  const runLoop = () => {
    setTimeout(()=>{
      showEmoji()
      if (!stopped) {
        runLoop();
      } 
    }, interval);
  }

  // waits until board is fully loaded
  const loaded = () => {
    showEmoji()
    runLoop()
  }

  onDestroy(()=>{
    stopMusic()
    stopped = true
  })
</script>

<main>
  {#await preloadAll(allEmojis)}
    <div>Lade Spiel-Ressourcen</div>
  {:then result} 
    <div id="headline">
      <Counter bind:this={counter}/>
      <Countdown/>
    </div>
    <div id="board" use:loaded>
        {#each fields as field}
        <div id="{field}" class="game-field"></div>
        {/each}
    </div>
  {/await}
</main>

<style>

  #app {
    padding: 0;
  }

  main {
    padding: 0;
  }

  #board {
    height: 80vh;
    max-height: calc((100vw/5)*7);
    margin-top: 15%;
    width: auto;
    aspect-ratio: 5/7;
  }

  #headline {
    font-size: 1.3em;
    padding: 0em 0.5em;
    padding-top: 0.5em;
  }

  .game-field {
    font-size: 5em;
    float: left;
    height: 14.28571428571429%;
    width: auto;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  :global(.emoji) {
    width: 90%;
  }

</style>