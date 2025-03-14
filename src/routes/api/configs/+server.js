import { fetchConfig, updateConfig } from "$lib/server/db1";

export async function GET({ url }) {
  const comfig = await fetchConfig(url.searchParams.get("id"));
  if (comfig) return Response.json(comfig, { status: 200 });
  return new Response(null, { status: 404 });
}

export async function PATCH({ url, request }) {
  const id = url.searchParams.get("id");
  const payload = await request.json();
  const updatedConfig = await updateConfig(id, payload);
  if (!updatedConfig) {
    return new Response(null, { status: 500 });
  }

  const comfig = await fetchConfig(url.searchParams.get("id"));
  if (comfig) return Response.json(comfig, { status: 200 });
  return new Response(null, { status: 404 });
}
