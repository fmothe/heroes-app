import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../helpers/getHeroByPublisher';
import { HeroCard } from './HeroCard';
import 'animate.css'

export const HeroList = ({publisher}) => {


  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className='animate__animated animate__fadeInLeft'>
      <h1 className="mt-4">{publisher} - Hero List</h1>
      <hr />
      <div className="row rows-cols-1 rows-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero}/>
        ))}
      </div>
    </div>
  );
};
