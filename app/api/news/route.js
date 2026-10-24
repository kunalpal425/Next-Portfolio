export const runtime = "nodejs";

export async function GET() {
  if (!process.env.NEWS_API_KEY) {
    return Response.json(
      { error: "News service is not configured." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API_KEY}&country=in&language=en&size=9&category=technology`,
      { next: { revalidate: 60 * 60 } }
    );

    const data = await res.json();

    if (!res.ok || data.status !== "success" || !Array.isArray(data.results)) {
      console.error("News provider error:", data);
      return Response.json(
        { error: "Unable to load news right now. Please try again later." },
        { status: 502 }
      );
    }

    return Response.json(data, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("News fetch error:", error);
    return Response.json(
      { error: "Failed to fetch news. Please try again later." },
      { status: 502 }
    );
  }
}
