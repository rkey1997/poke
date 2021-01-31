
import s from './PokemonItem.module.css'


const PokemonItem = (props) =>{
    return(
        <div className={s.inner}>

            <div>
                <img className={s.jump} src={props.pic} alt=""/>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export default PokemonItem;