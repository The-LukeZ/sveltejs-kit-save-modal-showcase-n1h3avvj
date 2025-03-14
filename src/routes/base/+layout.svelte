<script>
  import { gg } from "$lib/stores/config.svelte";

  let { children } = $props();
</script>

{@render children()}

{#if gg.error}
  <code>{gg.error}</code>
{/if}