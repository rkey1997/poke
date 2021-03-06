import { NavLink, useLocation } from "react-router-dom";
import s from './Pokemon.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const location = useLocation();
    const [pokemon, setPokemon] = useState({})
    const [abilities, setAbilities] = useState([])
    let url = location.pathname.split('/')
    let name = url[2]


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                setPokemon(response.data)
                axios.get(response?.data?.abilities[0]?.ability?.url)
                    .then(r => {
                        setAbilities(r.data.effect_entries)
                    })
            })
    }, [name])
    return (
        <div className={s.wrapper}>
            <div>
                <NavLink to='/'>
                    <div className={s.back}>
                        back
                </div>
                </NavLink>
            </div>
            <div className={s.pokemonWrapper}>
                <div className={s.pokemonInfo}>
                    <div className={s.pokemon__img}>
                        <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
                    </div>
                    <div className={s.pokemon__content}>
                        <div className={s.pokName}>{pokemon.name}</div>
                        <div><span>base experience:</span><span className={s.pokExp}>{pokemon.base_experience}</span></div>
                        <div><span>weight:</span><span className={s.pokExp}>{pokemon.weight}</span></div>
                        <div><span>height:</span><span className={s.pokExp}>{pokemon.height}</span></div>
                        <div><span>ability:</span><span className={s.pokExp}>{abilities[1]?.effect}</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pokemon;