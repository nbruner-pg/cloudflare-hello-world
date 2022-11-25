export default {
  async fetch(request: any, env: any) {
    return await handleRequest(request)
  }
}

async function handleRequest(request: { url: string; }) {
  console.log(request.url);
  const { searchParams } = new URL(request.url);
  const message = searchParams.get('message') || "none specified!";
  return new Response(`Your message for the world: ${message}`);
}