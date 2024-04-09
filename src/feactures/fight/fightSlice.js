
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  players: [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, alive: true, manaChouk: true },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, alive: true, manaChouk: true },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, alive: true, manaChouk: true },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, alive: true, manaChouk: true }
  ],

  monster: {
    pv: 800,
    pvMax: 800,
    bgType: 'bg-danger',
    faType: 'fa-heart',
    barName: ' : pv'
  },
};


export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv -= action.payload.hitValue

      // check pv du monstre >0 combat gagner
      if (state.monster.pv <= 0) {
        alert('monster is dead');
        state.monster.pv = 0

        // cree une animation de dead pour le monster
      }
    },

    hitPlayer: (state, action) => {
      const currentPlayer = state.players.find((player) => player.id === action.payload.playerId)
      // console.log(currentPlayer);
      currentPlayer.pv -= action.payload.dammage

      if (currentPlayer.mana > 0) {
        currentPlayer.mana -= action.payload.manaValue
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
      console.log(currentPlayerAlive.length);
    
    },
    


  },
});

export const { hitMonster, hitPlayer, numberAlive } = fightSlice.actions;
export default fightSlice.reducer;