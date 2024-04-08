import React from 'react';
import { useDispatch} from 'react-redux';
import { hitMonster } from '../feactures/fight/fightSlice';


// mettre la class en fonction soit tu le récupère en props
const ButtonCapacity =({player})=>{
    // créer une constante qui stock le hook dispatch de redux
    const dispatch = useDispatch();

    const combat = (event) => {
        dispatch(hitMonster({
                hitValue: 10,
                playerId : event.target.id
            }))
    }
   
        return (
            <button id = {player.id} type="button" onClick={combat} className="btn btn-success material-tooltip-main ">
                hit
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> - 5
    </button>
        )
    

}



export default ButtonCapacity;