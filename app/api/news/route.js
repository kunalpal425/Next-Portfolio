export const runtime = "nodejs";

export async function GET() {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API_KEY}&country=in&language=en&size=9&category=technology`
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}