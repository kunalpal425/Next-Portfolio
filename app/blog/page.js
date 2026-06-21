"use client";

import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import EventCard from "@/components/ui/Card";

export default function BlogSection({ id = "blog" }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setArticles(data.results || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {Array.isArray(articles) &&
            articles.slice(0, 6).map((item, index) => (
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
      </div>
    </section>
  );
}

