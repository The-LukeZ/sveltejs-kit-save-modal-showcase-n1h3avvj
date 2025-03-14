<script>
  import { saveFunction } from "$lib/savings";

  let saving = $state(false);
</script>

<div class="save-alert-container">
  <div role="alert" class="alert alert-warning alert-soft sm:alert-horizontal alert-vertical w-full overflow-hidden">
    <span class="text-base font-semibold md:text-lg">You have unsaved changes!</span>
    <div class="ml-auto flex w-full justify-end gap-x-3 md:w-fit">
      <button type="reset" class="btn btn-accent w-1/2" disabled>Reset</button>
      <button class="btn btn-success w-1/2" onclick={$saveFunction} disabled={saving}>
        {saving ? "Saving" : "Save"}
      </button>
    </div>
  </div>
</div>
