// This file simulates a part of the database where other things are stored

let notes = [
  "Hogus Bogus",
  "Meeting reminder: Team sync at 2 PM",
  "Todo List: Complete project documentation, Review pull requests",
  "Quick note about the Smith account",
];

export async function fetchNotes() {
  return notes;
}

/**
 * @param {string[]} newNotes
 */
export async function addNotes(...newNotes) {
  notes.push(newNotes);
  return true;
}

/**
 * @param {string[]} newNotes
 */
export async function overwriteNotes(newNotes) {
  notes = newNotes;
  return true;
}
