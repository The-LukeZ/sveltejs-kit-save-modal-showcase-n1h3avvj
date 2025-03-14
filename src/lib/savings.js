import { gg } from "$lib/stores/config.svelte";
import { writable } from "svelte/store";

/** @type {import("svelte/store").Writable<() => Promise<any>>} */
export let saveFunction = writable(async () => {
  gg.error = "No save function set.";
});
