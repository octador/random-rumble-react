import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';



const PlayerList = () => {
  
    const players = useSelector((store) => store.fight.players);
    
  return (
  <div className='d-flex flex-wrap gap-5'>
    {players.map(player => (
      <PlayerCard
        key={player.id}
        player={player} />))}
  </div>

  );

    }
export default PlayerList;