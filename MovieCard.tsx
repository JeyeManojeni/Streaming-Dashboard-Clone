import React from 'react';

export default function HeroBanner({ movie }: { movie: any }): React.ReactNode {
  return (
    <section className="relative h-72 md:h-96">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path ?? ''}`}
        alt={movie?.title ?? 'Movie banner'}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </section>
  );
}