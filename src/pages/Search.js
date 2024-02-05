import React from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath,queryTerm);
  
  useTitle(`Search Result for ${queryTerm} / Cinemate`);

  

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white '>{ movies.length === 0 ? `No result found for  ${queryTerm}` : `Result for ${queryTerm}` }</p>

        <div className='flex justify-start flex-wrap'>
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
            
            
        </div>
      </section>
    </main>
  )
}
