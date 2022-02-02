import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import 'animate.css'
const heroImage = require.context('../../assets', true)


export const HeroScreen = () => {
  const { heroid } = useParams();

  const hero = useMemo(() => getHeroById(heroid), [heroid]);
  const navigation= useNavigate()

  if (!hero) return <Navigate to="/" />;
  const imagePath = heroImage(`./${hero.id}.jpg`);

  const { id, superhero, characters, alter_ego, first_appearance, publisher } = hero;

  const handleBack = () => {
    navigation(-1)
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item"> <b> Publisher: </b>{publisher} </li>
          <li className="list-group-item"> <b>First Appearence: </b>{first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-primary justify-content-end" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};
