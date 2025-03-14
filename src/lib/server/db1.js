// This file simulates the part of the database where notes are stored

const configs = {
  123: {
    name: "Default Config",
    enabled: true,
    settings: {
      theme: "light",
      notifications: true,
    },
  },
  456: {
    name: "Admin Config",
    enabled: false,
    settings: {
      theme: "dark",
      notifications: false,
    },
  },
  789: {
    name: "Guest Config",
    enabled: true,
    settings: {
      theme: "blue",
      notifications: true,
    },
  },
  101: {
    name: "Experimental Config",
    enabled: false,
    settings: {
      theme: "green",
      notifications: false,
    },
  },
};

export async function fetchConfig(/** @type {string} */ id) {
  return configs[`${id}`] || null;
}

export async function updateConfig(/** @type {string} */ id, /** @type {any} */ newConfig) {
  if (id in configs) {
    for (const [key, value] of Object.entries(newConfig)) {
      configs[id][key] = value; // We only update, not replace
    }
    return true;
  }
  return false;
}
