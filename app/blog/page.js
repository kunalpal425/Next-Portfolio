"use client";

import { useEffect, useState } from "react";
import EventCard from "../../components/ui/Card";
import { DNA } from "react-loader-spinner";

export default function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.NEWS_API_KEY;

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
      <div className="h-screen flex justify-center items-center">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <section className="py-20 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center ">Latest News</h2>
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
