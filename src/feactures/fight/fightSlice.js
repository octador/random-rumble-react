
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, alive: true, manaChouk: true, played: true },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, alive: true, manaChouk: true, played: true },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, alive: true, manaChouk: true, played: true },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, alive: true, manaChouk: true, played: true }
  ],

  monster: {
    pv: 800,
    pvMax: 800,
    bgType: 'bg-danger',
    faType: 'fa-heart',
    barName: ' : pv'
  },

  game: {
    over: false,
    victory: false,
  }
};


export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv -= action.payload.hitValue

      if (state.monster.pv <= 0) {
        state.game.victory = true;
        state.monster.pv = 0;
        alert('monster is dead');
        state.monster.pv = 800
          state.players.map((player) => {
            player.pv = 100;
            player.alive = true;
            player.mana = 30;
            player.played = true;
            console.log(player.played);
          });
        }
       
      
    
    },

    hitPlayer: (state, action) => {
      const currentPlayer = state.players.find((player) => player.id === action.payload.playerId)
     
    if (state.monster.pv > 0 && state.game.victory === false) {
      currentPlayer.pv -= action.payload.dammage
    }
     

      if (action.payload.manaValue) {
        if (currentPlayer.mana > 0 && state.monster.pv > 0 && state.game.victory === false) {
          currentPlayer.mana -= action.payload.manaValue
        }
      }

      if (currentPlayer.mana <= 0) {
        currentPlayer.mana = 0;
        currentPlayer.manaChouk = false
      }

      if (currentPlayer.pv <= 0) {
        currentPlayer.pv = 0

        if (currentPlayer.pv === 0) {
          currentPlayer.alive = false
        }

      }

    },

    numberAlive: (state) => {
      const currentPlayerAlive = state.players.filter((player) => player.alive === true)
      if (currentPlayerAlive.length === 0) {
        state.game.over = true;
      }
    },

    regeneMana: (state, action) => {
      const currentPlayerRegeneMana = state.players.find((player) => player.id === action.payload.playerId);
      
        currentPlayerRegeneMana.mana += action.payload.regenePlayerMana;
      
      if(currentPlayerRegeneMana.mana >= 30) {
        currentPlayerRegeneMana.mana = 30;
        }
    

    },

    roundbyround: (state, action) => {

      const currentPlayerRound = state.players.find((player) => player.id === action.payload.playerId);
// to dooooooooooooooo si monstre est mort ne pas faire sa

 
currentPlayerRound.played = false;
  
  if(state.monster.pv > 0 && state.game.victory) {
    currentPlayerRound.played = true;
  } 

     
      const currentAlivePlayer = state.players.filter((player) => player.alive === true)

      const allPlayersPlayed = currentAlivePlayer.every(player => player.played === false);

     
      if (allPlayersPlayed) {
        state.players.map((player) => {
          player.played = true;
        })

      }
      
      if (state.monster.pv <= 0) {
        state.players.map((player) => {
          console.log('test');
          player.played = true;
        })
      }

    },
    respawnPlayer: (state) => {
      state.game.over = false;
     
        state.players.map((player) => {
          player.pv = 100;
          player.alive = true;
          player.mana = 30;
          player.played = true;
          state.monster.pv =800;
          console.log(player.played);
        });
  
    },
    checkMonsterAlive: (state) => {
      state.game.victory = false;
    }
  },
})


function resetPlayer(state) {
  state.players.map((player) => {
    player.pv = 100;
    player.alive = true;
    player.mana = 30;
    player.played = true;
    state.monster.pv =800;
    console.log(player.played);
  });
}


export const { hitMonster, hitPlayer, numberAlive, alertIfGameOver, respawnPlayer, regeneMana, roundbyround, checkMonsterAlive } = fightSlice.actions;
export default fightSlice.reducer;

