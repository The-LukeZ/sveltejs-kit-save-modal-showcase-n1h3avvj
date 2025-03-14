import * as Notes from "$lib/server/db2";

export async function GET() {
  const _notes = await Notes.fetchNotes();
  return Response.json(_notes);
}

// Accepts body with { content: string }[]
export async function POST({ request }) {
  /** @type {any[]} */
  const payload = await request.json();
  Notes.addNotes(...payload.map((n) => n.content));
  const _notes = await Notes.fetchNotes();
  return Response.json(_notes);
}

// Accepts body with { content: string }[]
export async function PUT({ request }) {
  /** @type {any[]} */
  const payload = await request.json();
  console.log(payload);
  Notes.overwriteNotes(payload.map((n) => n.content));
  const _notes = await Notes.fetchNotes();
  return Response.json(_notes);
}
