<script>
  let gameState = "gameover"// intro, setting, playing, gameover
  const goodEmojis = ["⛄","🎅","❄️","🔔","🎄"];
  const badEmojis = ["🥑","🤡","💀","🐵","💩"]
  const numFields = 35
  const fields = [...Array(numFields).keys()];
  let currentFieldID = Number;
  let interval = 3000
  const minInterval = 1000
  
  // sound effects and background music
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

  const getEmoji = () => {
    const rand = Math.random();
    const emojis = rand >= 0.5 ? goodEmojis : badEmojis;
    const randIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randIndex];
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
    fieldSelected.innerText = getEmoji();
    fieldSelected.onclick = (e) => {
      if (goodEmojis.includes(e.target.innerText)) {
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
      e.target.innerText = "";
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
    <Counter bind:this={counter}/>
    <Countdown stopMusic={()=>stopMusic()}/>
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
  
    /* .game-field:nth-child(odd) {
      background-color: lightgray;
    }
  
    .game-field:nth-child(even) {
      background-color: gray;
    } */
   
  </style>