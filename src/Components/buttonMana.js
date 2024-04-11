import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hitPlayer, numberAlive, respawnPlayer, regeneMana, roundbyround } from '../feactures/fight/fightSlice';

const Buttonmana = ({ player }) => {

    const gameOver = useSelector((store) => store.fight.game);
    const dispatch = useDispatch();
    
    const ButtonMana = (event) => {
        dispatch(
            regeneMana({
                regenePlayerMana: Math.floor(Math.random() * (7 - 5 + 1) + 5),
                playerId: player.id,
                buttonClass: 3
            }))

        dispatch(
            hitPlayer({  
            dammage: Math.floor(Math.random() * (7 - 5 + 1) + 5),
            playerId: player.id,
              
        }));

        dispatch(numberAlive()); 
        dispatch(roundbyround({
            playerId :player.id
          }))
        
    }
    
    if (gameOver.over === true) {
        alert('parti perdu, on recommence');
        dispatch(respawnPlayer());
    }
 
    return (
        <button disabled={player.alive 
        && player.manaChouk 
        && player.played ? false : true} 
        id={player.id} 
        type="button" 
        onClick={ButtonMana} 
        className="btn btn-success material-tooltip-main ">
            Regene Mana
            <i className="fas fa-bomb"></i>
            <i className="fas fa-fire-alt"></i>
        </button>
    )

}

export default Buttonmana;