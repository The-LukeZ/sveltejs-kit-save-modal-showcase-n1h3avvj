<script>
  import { gg } from "$lib/stores/config.svelte";
  import SaveAlert from "$lib/SaveAlert.svelte";

  let { children } = $props();
</script>

{@render children()}
