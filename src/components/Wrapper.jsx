import axios from 'axios'
import { useEffect, useState } from 'react'
import PokemonsItems from './pokemons/PokemonsItems';
import Pokemon from './Pokemon'
import s from './Wrapper.module.css'
import Navbar from './Navbar'
import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';


const Wrapper = () => {

    const [pokemons, setPokemons] = useState([]);
    const [value, setValue] = useState('');

    const Mount = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        let items = res.data.results
        const data = await Promise.all(
            items.map((item) => (
                axios.get(item.url)
            ))
        )
        setPokemons(
            data.map(({ data }) => ({ name: data.name, pic: data.sprites.other.dream_world.front_default }))
        )
    }
    useEffect(() => Mount(), [])
    let foundPOk = (arr) => {
        return arr.filter((item) => {
            return (
                item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            )
        })

    }

    return (
        <div className={s.glav}>
            <BrowserRouter>
                <div className={s.header}>

                    <span className={s.sharOfPokemon}>
                        <NavLink to='/'>
                            <img src="https://yt3.ggpht.com/a/AATXAJwKESbDqKRd1JcTRmW9UIc5svrh0M6FXA9Sb5uxog=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
                        </NavLink>

                    </span>

                    <span>
                        <input value={value} onChange={({ target: { value } }) => setValue(value)} placeholder='найти покемона' type="text" />
                    </span>
                </div>
                <div className={s.wrapper}>

                    <div>
                        <Navbar pokemons={foundPOk(pokemons)} />
                    </div>
                    <div className={s.wrapper_items}>
                        <Switch>
                            <Route exact path='/' render={() => <PokemonsItems arr={foundPOk(pokemons)} />} />
                            <Route path='/pokemon' render={() => <Pokemon />} />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        </div>

    )
}

export default Wrapper;