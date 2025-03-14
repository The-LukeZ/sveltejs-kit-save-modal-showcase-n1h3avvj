<script>
  import { saveFunction } from "$lib/savings";
  import { gg } from "$lib/stores/config.svelte";

  // Reactive variable for the new note input
  let newNote = $state("");

  saveFunction.set(async () => {
    const res = await fetch("/api/notes", {
      method: "PUT",
      // @ts-ignore
      body: JSON.stringify(gg.config.map((note) => ({ content: note }))),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Response Data:", data);
      gg.config = data;
      gg.unsavedChanges = false;
    } else {
      console.error(res);
      gg.error = `Status: ${res.status} - ${res.statusText}`;
    }
  });
</script>

{#if gg.config}
  <div class="p-5">
    <ul class="list-disc">
      {#each gg.config as note}
        <li class="mb-2">{note}</li>
      {/each}
    </ul>
  </div>
{:else}
  <p>Loading...</p>
{/if}

<hr />

<div class="mt-4 flex gap-2">
  <div class="join w-full">
    <div>
      <input
        bind:value={newNote}
        type="text"
        class="input input-bordered join-item grow"
        placeholder="Type your note..."
        required
      />
    </div>
    <button
      class="btn btn-accent join-item"
      onclick={() => {
        if (newNote.trim()) {
          gg.config.push(newNote);
          newNote = "";
          gg.unsavedChanges = true;
        }
      }}
    >
      Add Note
    </button>
  </div>
</div>
