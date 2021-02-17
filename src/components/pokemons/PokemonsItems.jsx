
import { NavLink } from 'react-router-dom';
import s from './PokemonItem.module.css'
const PokemonsItems = (props) => {

    return (
        <div className={s.inner_items}>
            {
                props.arr.map((pokemon) => (

                    <NavLink key={pokemon.name} name={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                        <div className={s.inner}>
                            <div>
                                <img className={s.jump} src={pokemon.pic} alt="" />
                            </div>
                            <div>{pokemon.name}</div>
                        </div>
                    </NavLink>


                ))
            }
        </div>
    )
}

export default PokemonsItems;