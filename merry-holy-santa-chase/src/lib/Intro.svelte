<script>
    // import { connectFirestoreEmulator } from "firebase/firestore";
import {push} from 'svelte-spa-router'
import {HasVisited} from "./store.js"

const content = [
    {"type":"text","text":"Ho, ho, ho ... fröhliche Weihnachten!"},
    {"type":"text","text":"Hast du Lust auf ein kleines Weihnachtsspiel?"},
    {"type":"title","text":"FANG DEN SANTA!"},
    {"type":"text","text":"Dir werden nacheinander verschiedene Emojis gezeigt."},
    {"type":"text","text":"Klicke auf alle Emojis, die etwas mit Weihnachten zu tun haben."},
    {"type":"text","text":"Für jedes Weihnachts-Emoji bekommst du einen Punkt."},
    {"type":"text","text":"Aber Achtung: Nicht-Weihnachts-Emojis geben Strafpunkte!"},
    {"type":"text","text":"Wenn du auf der nächsten Seite einen Spielernamen eingibst, wird dein Punktestand gespeichert."},
    {"type":"text","text":"Wenn du das nicht möchtest, kannst du auch anonym spielen."},
    {"type":"text","text":"Lass dann einfach das Namensfeld leer."},
]

let typingDelay = 50;
let pastingDelay = 500;
let paragraphDelay = 2000;
let contentIndex = 0;
let styleType = "text";
let contentContainer;

const typing = (text, container, callback) => {
    const letters = text.split("")
    let typed = ""
    let lettersIndex = 0
    const animation = () => {
        setTimeout(()=>{
            typed = typed + letters[lettersIndex]
            container.innerText = typed;
            lettersIndex++
            if (typed.split("").length < letters.length) {
                animation()
            } else {
                callback();
            }
        },typingDelay)
    }
    animation()
}

const pasting = (text, container, callback) => {
    const words = text.split(" ");
    let pasted = "";
    let wordsIndex = 0
    const animation = () => {
        setTimeout(()=>{
            pasted = pasted + " " + words[wordsIndex]
            container.innerText = pasted;
            wordsIndex++
            if (pasted.split(" ").length <= words.length) {
                animation()
            } else {
                callback();
            }
        },pastingDelay)
    }
    animation()
}

const oncallback = () => {
    contentIndex++
    setTimeout(()=>{
        if (contentIndex < content.length) {
            const cntxt = content[contentIndex]
            contentContainer.innerText = "";
            styleType = cntxt.type;
            if (cntxt.type === "text") {
                typing(cntxt.text, contentContainer, oncallback);
            } else {
                pasting(cntxt.text, contentContainer, oncallback);
            }
        } else {
            pushToHomeScreen()
        }
    },paragraphDelay)
}

const onload = () => {
    contentContainer = document.getElementById("content-container")
    typing(content[contentIndex].text, contentContainer, oncallback)
}

const pushToHomeScreen = () => {
    HasVisited.set(true)
    push("/")
}

</script>
<main>
    <div id="flexbox-wrapper">
        <div use:onload id="content-container" class={styleType}></div>
        <button on:click|preventDefault={()=>pushToHomeScreen()}>überspringen</button>
    </div>
</main>

<style>

    #flexbox-wrapper div {
        max-width: 90vw;
    }

    @media screen and (orientation:landscape) { 
        #flexbox-wrapper div {
            max-width: 50vw;
        }
     }

    .title {
        font-size: 3.2em;
        line-height: 1.1em;
        color: red;
        text-shadow: 4px 4px gray;
    }

    button {
        margin-top: 2em;
        color: #646cff;
        position: absolute;
        bottom: 30%;
    }

</style>