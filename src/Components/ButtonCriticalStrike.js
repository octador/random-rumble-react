import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkMonsterAlive, hitMonster, hitPlayer, numberAlive, respawnPlayer, roundbyround } from '../feactures/fight/fightSlice';

const ButtonCriticalStrike = ({ player }) => {

  const gameOver = useSelector((store) => store.fight.game);
  const monster =useSelector((store)=>store.fight.monster)
  const dispatch = useDispatch();

  const criticalStrike = (event) => {
    dispatch(
      hitMonster({
        hitValue: Math.floor(Math.random() * (200 - 20 + 1) + 20),
        playerId: player.id,
        buttonClass: 2
      }));

    dispatch(hitPlayer({
      manaValue: Math.floor(Math.random() * (5 - 3 + 1) + 3),
      dammage: Math.floor(Math.random() * (40 - 10 + 1) + 10),
      playerId: player.id
    }));

    if(monster.pv > 0) {
      dispatch(checkMonsterAlive());
    }

  

    dispatch(roundbyround({
      playerId :player.id
    }))

    if (gameOver.over === true) {
      alert('parti perdu, on recommence');
      dispatch(respawnPlayer());
    }
    
  }
  return (
    <button disabled={player.alive && player.manaChouk && player.played  ? false : true} id={player.id} type="button" onClick={criticalStrike} className="btn btn-success material-tooltip-main ">
      Hit Critick
      <i className="fas fa-bomb"></i>
      <i className="fas fa-fire-alt"></i>
    </button>
  )
}


export default ButtonCriticalStrike