import { ProgressBar } from '../progressBar/ProgressBar';
import { MAX_STAT } from '../../const/max-stat';

const statColors = {
    hp: '#ff5959',
    attack: '#f5ac78',
    defense: '#fae078',
    specialAttack: '#9db7f5',
    specialDefense: '#a7db8d',
    speed: '#fa92b2',
};

export function Stats({ infos }) {
    return (
        <div>
            <ProgressBar label="HP" value={infos.HP} maxValue={MAX_STAT.hp} color={statColors.hp} />
            <ProgressBar label="Attack" value={infos.Attack} maxValue={MAX_STAT.attack} color={statColors.attack} />
            <ProgressBar label="Defense" value={infos.Defense} maxValue={MAX_STAT.defense} color={statColors.defense} />
            <ProgressBar label="Special Attack" value={infos['Special attack']} maxValue={MAX_STAT.specialAttack} color={statColors.specialAttack} />
            <ProgressBar label="Special Defense" value={infos['Special defense']} maxValue={MAX_STAT.specialDefense} color={statColors.specialDefense} />
            <ProgressBar label="Speed" value={infos.Speed} maxValue={MAX_STAT.speed} color={statColors.speed} />
        </div>
    );
}
