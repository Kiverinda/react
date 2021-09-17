import { createSlice } from '@reduxjs/toolkit'

export const TARGET_API_URL = 'https://api.thecatapi.com/v1/images/search';

export const testSlice = createSlice({
    name: 'test',
    initialState: {
        loading: false,
        error: false,
        data: null
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setData, setError, setLoading } = testSlice.actions

export default testSlice.reducer