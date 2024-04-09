import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitPlayer, numberAlive } from '../feactures/fight/fightSlice';



// mettre la class en fonction soit tu le récupère en props
const ButtonCapacity = ({ player }) => {
    // créer une constante qui stock le hook dispatch de redux
    const dispatch = useDispatch();

    const hitStandard = (event) => {
        dispatch(
            hitMonster({
                hitValue: Math.floor(Math.random() * (40 - 10 + 1) + 10),
                playerId: player.id,
                buttonClass: 1
            }));

        dispatch(hitPlayer({
            manaValue: Math.floor(Math.random() * (3 - 1 + 1) + 1),
            dammage: Math.floor(Math.random() * (40 - 10 + 1) + 10),
            playerId: player.id
        }));
        dispatch(numberAlive())

    }
    // console.log(player.alive);

    return (
        
        <button disabled={player.alive ? false : true}id={player.id} type="button" onClick={hitStandard} className="btn btn-success material-tooltip-main ">
            Hit Standard
            <i className="fas fa-bomb"></i>
            <i className="fas fa-fire-alt"></i>
        </button> 

    )


}



export default ButtonCapacity;