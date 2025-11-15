

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../../../types/movie';

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <section className="px-4 py-6">
      <h3 className="text-lg md:text-xl font-semibold mb-4">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`} className="min-w-[150px] block">
            <Image
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={225}
              className="rounded"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}












