import { combineReducers } from 'redux';
import gamesSlice from './gamesSlice';
import detailSlice from './detailSlice';

const reducer = combineReducers({
    games: gamesSlice, 
    detail: detailSlice});

export default reducer;