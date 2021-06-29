import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';
import { loadingDetail, getDetails } from '../slices/detailSlice';
import {useAppDispatch} from "../app/hooks";
import type { AppDispatch } from '../app/store';

  export const loadDetail = (id:string) => async (useAppDispatch:AppDispatch) => {
    useAppDispatch(loadingDetail());
  
    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenshotURL(id));
  
    useAppDispatch(
      getDetails({ game: detailData.data,
        screen: screenShotData.data})
        );
  };