import CSS from './Type.module.css';
import { PKMN_TYPES } from '../../const/type-color';


export function Type({ type }){
    const couleur = (PKMN_TYPES.find(el => el.name === type.toLowerCase())).color;

    return(
        <div className={CSS.theType} style={{backgroundColor: couleur}}>
            { type }
        </div>
    )
}