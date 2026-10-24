"use client";

import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import EventCard from "@/components/ui/Card";

export default function BlogSection({ id = "blog" }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("/api/news");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Unable to load news right now.");
        }

        setArticles(Array.isArray(data.results) ? data.results : []);
      } catch (fetchError) {
        console.error("Error fetching news:", fetchError);
        setError(fetchError.message || "Unable to load news right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [retryCount]);

  if (loading) {
    return (
      <section id={id} className="min-h-screen flex justify-center items-center">
        <DNA visible height="80" width="80" ariaLabel="dna-loading" />
      </section>
    );
  }

  return (
    <section id={id} className="py-20 mb-10 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Latest News</h2>
        {error ? (
          <div className="mt-8 text-center text-zinc-300" role="alert">
            <p>{error}</p>
            <button
              type="button"
              onClick={() => setRetryCount((count) => count + 1)}
              className="mt-4 rounded-lg bg-zinc-200 px-4 py-2 font-medium text-black hover:bg-zinc-300"
            >
              Try again
            </button>
          </div>
        ) : articles.length === 0 ? (
          <p className="mt-8 text-center text-zinc-400">
            No news articles are available right now.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 justify-items-center">
            {articles.slice(0, 9).map((item, index) => (
              <EventCard
                key={item.article_id || index}
                title={item.title}
                description={item.description || "No description available"}
                image={item.image_url}
                buttonText="Read News"
                link={item.link}
                featured={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
