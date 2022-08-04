/** @format */

import React from 'react';
import { forwardRef } from 'react';
import Image from 'next/image';

const Thumbnails = forwardRef(({ result }, ref) => {
  const BASE_URLL = 'http://image.tmdb.org/t/p/original';
  return (
    <div ref={ref}>
      <Image
        layout="responsive"
        src={`${BASE_URLL}${result.backdrop_path || result.poster_path}`}
        height={1080}
        alt="img"
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="">{result.title || result.original_name}</h2>
      </div>
    </div>
  );
});

export default Thumbnails;
