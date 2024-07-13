// import {writable} from "svelte/store";
import { persisted } from 'svelte-persisted-store'

export const CountStore = persisted("CountStore",0);
export const PlayerName = persisted("PlayerName","");
export const ScoreInDb = persisted("ScoreInDb",false);
export const ScoreID = persisted("ScoreID","");