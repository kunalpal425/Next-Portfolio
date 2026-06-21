export const runtime = "nodejs";

export async function GET() {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API_KEY}&country=in&language=en&size=9&category=technology`,
      { next: { revalidate: 60 * 60 } }
    );

    const data = await res.json();

    return Response.json(data, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return Response.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
