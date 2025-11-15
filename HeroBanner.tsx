import Image from 'next/image';

type Movie = {
  id: number;
  title: string;
  overview?: string | null;
  backdrop_path?: string | null;
  poster_path?: string | null;
  // extend with other TMDB fields if needed
};

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-72 md:h-96">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute bottom-4 left-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
        <p className="mt-2 max-w-md">{movie.overview}</p>
      </div>
    </section>
  );
}