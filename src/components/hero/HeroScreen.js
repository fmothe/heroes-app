import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = () => {

  const {heroid} = useParams();


  const hero = getHeroById(heroid);

  if(!hero) return <Navigate to='/'/>

  return (
    <div>
      <h1>{hero.superhero}</h1>
    </div>
  );
};
