import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AllState extends DetailState, LoadingState {

}

interface DetailState {
    game: {
        platforms: [],
        rating: number,
        name?: string,
        background_image?: any,
        description_raw?: string
    },
    screen: {
        results: [],
        id?: string | number,
        image?: string
    }
}

interface LoadingState {
    isLoading: boolean
}

const initialState: AllState = {
    game: {
        platforms: [],
        rating: 0
    },
    screen: { results: [] },
    isLoading: true,
};

const detailSlice = createSlice({
    name: "gamesDetails",
    initialState,

    reducers: {
        getDetails: (state: AllState, action: PayloadAction<DetailState>) => ({
            ...state,
            game: action.payload.game,
            screen: action.payload.screen,
            isLoading: false,
        }),
        loadingDetail: (state: AllState) => ({
            ...state,
            isLoading: true,
        })
    }

});

export const { loadingDetail, getDetails } = detailSlice.actions;
export default detailSlice.reducer;
