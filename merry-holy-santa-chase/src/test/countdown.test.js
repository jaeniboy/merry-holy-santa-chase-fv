import {test, expect, describe} from "vitest"
import {render} from '@testing-library/svelte';
//import { onDestroy } from "svelte"
import Countdown from "../lib/Countdown.svelte"
//import {twoDigits} from "../lib/Countdown.svelte"

describe("Countdown", () => {
    const countdown = render(Countdown)
})

// test("something", ()=>{
//     expect(hello).toBe("hello")
// })
