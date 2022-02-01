import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../helpers/useForm";
import { HeroCard } from "../hero/HeroCard";
import queryString from "query-string";

export const SearchScreen = () => {
  const navigate = useNavigate();
  //Location me permite obtener los parametros de la busqueda de la url
  const location = useLocation();

  //query string me permite parsear y separar los parametros de la url para obtener solo string necesarios para la busqueda
  //ex: ?q=batman == {q: 'batman'}
  //se puede desestructurar
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    search: q,
  });

  const { search } = formValues;

  const filter = useMemo( () => getHeroesByName(q), [q]);


  useEffect(() => {
  }, [filter]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a Hero"
              className="form-control"
              name="search"
              autoComplete="off"
              value={search}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-primary-outline mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Search heroe</div>
          ) : filter.length === 0 ? (
            <div className="alert alert-danger">No results for {q}</div>
          ) : (
            filter.map(hero => <HeroCard key={hero.id} hero={hero} />)
          )}
        </div>
      </div>
    </>
  );
};
