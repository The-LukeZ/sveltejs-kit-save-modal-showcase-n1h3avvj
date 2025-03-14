/**
 * @type {{ config: any, unsavedChanges: boolean, error: string | null }}
 */
export const gg = $state({
  config: null,
  unsavedChanges: false,
  error: null,
});

/**
 *
 * @param {string} apiPath
 */
export async function loadConfig(apiPath) {
  const res = await fetch(apiPath); // use static parameter for showcase
  if (res.ok) {
    gg.config = await res.json();
    gg.unsavedChanges = false;
  } else {
    console.error("Loading config failed.");
  }
}

