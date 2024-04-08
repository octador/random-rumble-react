// créer ce fichier dans src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import fightReducer from "../feactures/fight/fightSlice"


export const store = configureStore({ 
  reducer: {
    fight: fightReducer
  },
});
