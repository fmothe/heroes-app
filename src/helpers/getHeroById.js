import { heroes } from "../data/heroesdata";

export const getHeroById = (id) => {

    return heroes.find(hero => hero.id === id);
}