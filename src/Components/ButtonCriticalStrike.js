import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitPlayer, numberAlive } from '../feactures/fight/fightSlice';

const ButtonCriticalStrike = ({player}) => {

  const dispatch = useDispatch();

  const criticalStrike = (event) => {
    dispatch(
      hitMonster({
        hitValue: Math.floor(Math.random() * (130 - 20 + 1) + 20),
        playerId: player.id,
        buttonClass: 2
    }));

    dispatch(hitPlayer({
      manaValue: Math.floor(Math.random() * (5 - 3 + 1) + 3),
      dammage: Math.floor(Math.random() * (40 - 10 + 1) + 10),
      playerId: player.id
    }));

    dispatch(numberAlive())

  }
  return (
    <button disabled={player.alive&&player.manaChouk ? false : true} id={player.id} type="button" onClick={criticalStrike} className="btn btn-success material-tooltip-main ">
      Hit Critick
      <i className="fas fa-bomb"></i>
      <i className="fas fa-fire-alt"></i>
    </button>
  )
}


export default ButtonCriticalStrike