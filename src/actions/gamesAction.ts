import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import type { AppDispatch } from '../app/store';
import { fetchGames, fetchSearched } from "../slices/gamesSlice";
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchGameURL,
} from "../api";



//ACTION CREATOR
export const loadGames = () => async (useAppDispatch: AppDispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    useAppDispatch(
        fetchGames({
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }))
};


export const fetchSearch = (game_name: string) => async (useAppDispatch: AppDispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    useAppDispatch(fetchSearched({
        searched: searchGames.data.results,
    })
    );
};
