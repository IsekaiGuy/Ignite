import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AllGames extends GamesState, GamesSearched {

}

interface GamesState {
    popular: [],
    newGames: [],
    upcoming: [],
}

interface GamesSearched {
    searched: []
}

const initialState: AllGames = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
}

const gamesSlice = createSlice({
    name: 'gamesList',
    initialState,

    reducers: {
      fetchGames: (state:AllGames, action: PayloadAction<GamesState>) => ({
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      }),
      fetchSearched: (state:GamesState, action: PayloadAction<GamesSearched>) => ({
        ...state,
        searched: action.payload.searched,
      }),
      clearSearched: (state:GamesState, action: PayloadAction<[]>) => ({ ...state, searched: action.payload }),
    }});

    export const {fetchGames, fetchSearched, clearSearched} = gamesSlice.actions;
    export default gamesSlice.reducer;