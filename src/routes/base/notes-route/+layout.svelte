<script>
  import { onMount } from "svelte";
  import { loadConfig } from "$lib/stores/config.svelte";

  let { children } = $props();

  onMount(async function () {
    await loadConfig("/api/notes");
  });
</script>

{@render children()}
