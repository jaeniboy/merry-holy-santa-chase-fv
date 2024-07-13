<script>

  /* Images */
  const imagePath = "../../public/"
  const goodEmojis = [
    "santa.png",
    "tree.png",
    "present.png",
    "snowman.png",
  ]
  const badEmojis = [
    "shark.png",
    "pig.png",
    "wrench.png",
    "sunglasses.png",
    "pizza.png",
    "ghost.png",
    "chick.png",
    "ball.png",
  ]
  const numFields = 35
  const fields = [...Array(numFields).keys()];
  let currentFieldID = Number;
  let interval = 3000
  const minInterval = 1000
  
  /* sound effects and background music */
  const soundSuccess = new Audio("/ding_a.mp3")
  const soundError = new Audio("/error.mp3")
  const speedInterval = 0.2;
  const maxSpeed = 2;
  const backgroundMusic = new Audio("/silent_night.mp3")
  backgroundMusic.volume = 0.2;
  backgroundMusic.loop = true;
  backgroundMusic.play()
  
  import Counter from "./Counter.svelte"
  let counter;

  import Countdown from "./Countdown.svelte"
  import { ScoreInDb } from "./store"
  ScoreInDb.set(false)

  const getEmoji = () => {
    const rand = Math.random();
    const emojis = rand >= 0.5 ? goodEmojis : badEmojis;
    const randIndex = Math.floor(Math.random() * emojis.length);
    return `<img class="emoji" src="${imagePath}${emojis[randIndex]}"/>`
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
    // fieldSelected.innerText = getEmoji();
    fieldSelected.innerHTML = getEmoji();
    fieldSelected.onclick = (e) => {
      const emoji = e.target.src.split("/").at(-1)
      if (goodEmojis.includes(emoji)) {
        soundSuccess.pause();
        soundSuccess.currentTime = 0;
        soundSuccess.play();
        counter.increment();
        setInterval();
        seedUpMusic();
      } else {
        soundError.pause();
        soundError.currentTime = 0;
        soundError.play();
        counter.decrement();
      }
      e.target.parentNode.innerHTML = "";
      e.target.onclick = null;
    }
  }

  const clearFields = () => {
    const allFields = document.getElementsByClassName("game-field")
    for (const field of allFields) {
      field.innerText = "";
      field.onclick = null;
    }
  }

  const seedUpMusic = () => {
    const pr = backgroundMusic.playbackRate
    if (pr < maxSpeed) {
      backgroundMusic.playbackRate = pr + speedInterval;
    }
  }

  const stopMusic = () => {
    backgroundMusic.pause()
  }

  const setInterval = () => {
    if (interval > minInterval) {
      interval -= 500;
    }
  }

  const runLoop = () => {
    setTimeout(()=>{
      showEmoji()
      runLoop();
    }, interval);
  }

  // waits until board is fully loaded
  const loaded = () => {
    showEmoji()
    runLoop()
  }
</script>

<main>
    <div id="headline">
      <Counter bind:this={counter}/>
      <Countdown stopMusic={()=>stopMusic()}/>
    </div>
    <div id="board" use:loaded>
        {#each fields as field}
        <div id="{field}" class="game-field"></div>
        {/each}
    </div>
</main>

<style>

    #app {
      padding: 0;
    }
  
    #board {
      /* background-color: red; */
      height: 80vh;
      max-height: calc((100vw/5)*7);
      margin-top: 15%;
      width: auto;
      aspect-ratio: 5/7;
  
    }

    #headline {
      font-size: 1.3em;
      /* padding-top: 0.5em; */
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
      width: 100%;
    }
   
  </style>