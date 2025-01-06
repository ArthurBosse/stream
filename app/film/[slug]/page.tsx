import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { generateMovieSchema, generateBreadcrumbSchema } from "@/lib/schema/movie";
import { getYoutubeEmbedUrl } from "@/lib/youtube";
import { getMovieBySlug, getSimilarMovies } from "@/lib/movies";
import SimilarMovies from "@/components/SimilarMovies";
import Breadcrumb from "@/components/Breadcrumb";
import MovieActionButtons from "@/components/MovieActionButtons";
import Script from "next/script";

// ... rest of imports

export default async function MoviePage({ params }: Props) {
  const movie = await getMovieBySlug(params.slug);
  if (!movie) notFound();

  const mainCategory = movie.genres[0];
  const embedUrl = movie.trailer_url ? getYoutubeEmbedUrl(movie.trailer_url) : '';
  const similarMovies = await getSimilarMovies(movie);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateMovieSchema(movie, mainCategory))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(movie, mainCategory))
        }}
      />
      <Script id="ad-options" strategy="afterInteractive">
        {`
          atOptions = {
            'key' : '4d879006bcdadd4d377bfd7aa8fa0f60',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        `}
      </Script>
      <Script 
        src="//www.highperformanceformat.com/4d879006bcdadd4d377bfd7aa8fa0f60/invoke.js"
        strategy="afterInteractive"
      />

      <div className="relative">
        {/* Rest of the component remains the same */}
      </div>
    </>
  );
}