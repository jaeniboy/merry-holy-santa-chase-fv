<script>
  let gameState = "gameover"// intro, setting, playing, gameover
  const goodEmojis = ["⛄","🎅","❄️","🔔","🎄"];
  const badEmojis = ["🥑","🤡","💀","🐵","💩"]
  const numFields = 35
  const fields = [...Array(numFields).keys()];
  let currentFieldID = Number;
  const soundSuccess = new Audio("/ding.mp3")
  const soundError = new Audio("/error.mp3")
  let interval = 3000
  const minInterval = 1000

  import Counter from "./Counter.svelte"
  let counter;

  import Countdown from "./Countdown.svelte"

  const getEmoji = () => {
    const rand = Math.random();
    console.log(rand)
    const emojis = rand >= 0.5 ? goodEmojis : badEmojis;
    const randIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randIndex];
  }

  const showEmoji = () => {
    let newFieldID = Number;
    // avoid field repetition
    while (true) {
      newFieldID = Math.floor(Math.random() * numFields)
      if (newFieldID != currentFieldID) {
        break;
      }
    }
    currentFieldID = newFieldID

    // clear all fields
    clearFields()

    const fieldSelected = document.getElementById(String(newFieldID));
    fieldSelected.innerText = getEmoji();
    fieldSelected.onclick = (e) => {
      if (goodEmojis.includes(e.target.innerText)) {
        soundSuccess.play();
        counter.increment();
        setInterval();
      } else {
        soundError.play();
        counter.decrement();
      }
      e.target.innerText = e.target.id;
      e.target.onclick = null;
    }
  }

  const clearFields = () => {
    const allFields = document.getElementsByClassName("game-field")
    for (const field of allFields) {
      field.innerText = field.id;
      field.onclick = null;
    }
  }

  const setInterval = () => {
    if (interval > minInterval) {
      interval -= 500;
    }
  }

  const startGame = () => {
    setTimeout(()=>{
      showEmoji()
      startGame();
    }, interval);
  }
  
  startGame()
</script>

<main>
    <Counter bind:this={counter}/>
    <Countdown />
    <div id="board">
        {#each fields as field}
        <div id="{field}" class="game-field">{field}</div>
        {/each}
    </div>
</main>

<style>

    #app {
      padding: 0;
    }
  
    #board {
      background-color: red;
      height: 80vh;
      margin-top: 15%;
      width: auto;
      aspect-ratio: 5/7;
  
    }
  
    .game-field {
      font-size: 3em;
      float: left;
      height: 14.28571428571429%;
      width: auto;
      aspect-ratio: 1/1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  
    .game-field:nth-child(odd) {
      background-color: lightgray;
    }
  
    .game-field:nth-child(even) {
      background-color: gray;
    }
   
  </style>