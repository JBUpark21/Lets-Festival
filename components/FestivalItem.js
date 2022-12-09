/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function FestivalItem({ festival }) {
  return (
    <li>
      <a href={`/festival/${festival.slug}`} className="relative block group">
        <img
          src={festival.mainImage}
          alt={festival.name}
          className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-80 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-semibold text-white">{festival.name}</h3>

          <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            더보기
          </span>
        </div>
      </a>
    </li>
  );
}
