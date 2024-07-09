import {writable} from "svelte/store";

export const CountStore = writable(0);
export const PlayerName = writable("");
// export const IsTopTen = writable(false);
// export const Scores = writable([
//     {"name":"Gisi","score": 34, "new": false},
//     {"name":"Michael","score": 45, "new": false},
//     {"name":"Miriam","score": 64, "new": false},
//     {"name":"Lucy","score": 23, "new": false},
//     {"name":"Elli","score": 56, "new": false},
//     {"name":"Gerd","score": 34, "new": false},
//     {"name":"Hans","score": 14, "new": false},
//     {"name":"Gabi","score": 55, "new": false},
//     {"name":"Hans","score": 27, "new": false},
//     {"name":"Irene","score": 31, "new": false},
//     {"name":"Heidi","score": 45, "new": false},
//     {"name":"Gerd","score": 47, "new": false},
// ])

// export CountStore;