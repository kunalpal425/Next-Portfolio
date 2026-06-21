import React from "react";
import Image from "next/image";
import { Suspense } from "react";

export default function EventCard({
  title,
  description,
  image,
  featured = false,
  buttonText = "View Event",
  link = "#",
}) {
  return (
    <div className=" relative top-25 rounded-2xl overflow-hidden bg-zinc-900 text-white shadow-lg hover:shadow-2xl transition">

      {/* Image */}
      <div className="h-67 bg-zinc-700">
        {image && (
          <Image
            width={350}
            height={400}
            src={image}
            alt={title}
            unoptimized={true}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>

          {featured && (
            <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm text-zinc-400 line-clamp-3">
          {description}
        </p>

        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="w-full mt-2 cursor-pointer bg-zinc-200 text-black py-2 rounded-lg font-medium hover:bg-zinc-300 transition">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}
