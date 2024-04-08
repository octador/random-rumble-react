
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
     { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
     { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
     { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
     { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
  ],

  monster: { pv: 800,
   pvMax: 800,
    bgType:'bg-danger',
     faType:'fa-heart' ,
     barName:' : pv' },
};


export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster :(state,action) =>{
      state.monster.pv -= action.payload.hitValue
      console.log(' ici ', action.payload.playerId);
      // check pv du monstre >0 combat gagner
    },
    //  hitPlayer : (state,action)=>{
    // //   state.value = action.payload
    //  }
    // checkPlayerTurn: (state, action) => {
    //   // retrouver le perso qui a taper avec son id
    //   // state.player.played = true;
    // }
  },
});

export const {hitMonster} = fightSlice.actions;
export default fightSlice.reducer;