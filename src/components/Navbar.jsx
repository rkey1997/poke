import { NavLink } from "react-router-dom"
import s from './Navbar.module.css'
import { useState } from 'react'




const Navbar = (props) => {
    const [navbar, setNavbar] = useState(false)

    const test = () => {
        setNavbar(!navbar)
        console.log(navbar)
    }
    const close =()=>{
        setNavbar(false)
    }

    return (
        <div className={`${s.nav} ${navbar ? s.active : null}`} >
            <div onClick={test} className={s.btn}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <ul>{
                props.pokemons.map((pokemon) => (
                    <li key={pokemon.name} className={s.listItem}>
                        <NavLink onClick={close} activeClassName={s.active} to={{ pathname: `/pokemon/${pokemon.name}`, state: pokemon.name }}>
                            {pokemon.name}
                        </NavLink>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Navbar;