// import { createReducer, createSlice } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import IWeather from '../../types/Weather/IWeather';

const initialState = {
    weather: <IWeather>{},
    status: { isLoading: false, isFetching: false, isUninitialized: true },
};

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        setWeather(state, action) {
            state.weather = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice;
