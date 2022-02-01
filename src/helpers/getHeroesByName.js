import {heroes} from '../data/heroesdata';



export const getHeroesByName = (name='') =>{

    
    name = name.toLowerCase()
  
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}