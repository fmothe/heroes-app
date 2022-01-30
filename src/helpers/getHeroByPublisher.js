import { heroes } from "../data/heroesdata"



export const getHeroesByPublisher = (publisher) => {

    const validPublishers  = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} no valido` )
    }
    return heroes.filter( hero => hero.publisher == publisher);
};