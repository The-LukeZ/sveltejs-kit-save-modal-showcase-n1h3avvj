<script>
  import { gg } from "$lib/stores/config.svelte";
  import equal from "fast-deep-equal/es6";

  /** @type {any} */
  let oldConfig = undefined;

  $effect(() => {
    if (oldConfig == undefined) {
      oldConfig = $state.snapshot(gg.config);
      return;
    }

    if (!equal(oldConfig, gg.config)) {
      gg.unsavedChanges = true;
    } else {
      gg.unsavedChanges = false;
    }
  });
</script>

{#if gg.config}
  <h1>{gg.config.name}</h1>
  <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
    <label class="fieldset-label">
      <input type="checkbox" bind:checked={gg.config.enabled} class="toggle" />
      {gg.config.enabled ? "Disable" : "Enable"}
    </label>
  </fieldset>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">Themes</legend>
    <select class="select" bind:value={gg.config.settings.theme}>
      <option disabled selected>Pick a Theme</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
    </select>
  </fieldset>
  <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
    <legend class="fieldset-legend">Notifications</legend>
    <label class="fieldset-label">
      <input type="checkbox" bind:checked={gg.config.settings.notifications} class="checkbox" />
      I want to be spammed
    </label>
  </fieldset>
{:else}
  <p>Loading...</p>
{/if}
