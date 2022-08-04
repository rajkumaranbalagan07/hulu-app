/** @format */

import React from 'react';
import Thumbnails from './Thumbnails';
import FlipMove from 'react-flip-move';

function Results({ results }) {
  // console.log('results', results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => {
        return <Thumbnails key={result.id} result={result}></Thumbnails>;
      })}
    </FlipMove>
  );
}

export default Results;
