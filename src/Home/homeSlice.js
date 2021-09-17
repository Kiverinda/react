import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
      openComponent: 'chats',
    },
    reducers: {
        openComponentLeftBar: (state, action) => {
            state.openComponent = action.payload;
        }
    }
});

export const { openComponentLeftBar } = homeSlice.actions

export default homeSlice.reducer