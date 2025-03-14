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

export async function fetchConfig(id) {
  return id in configs ? configs[id] : null;
}

export async function updateConfig(id, newConfig) {
  if (id in configs) {
    configs[id] = newConfig;
    return true;
  }
  return false;
}
