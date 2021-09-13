import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
      openProfile: false,
      openChat: true,
    },
    reducers: {
        openProfile: (state, action) => {
            state.openProfile = action.payload;
            state.openChat = !action.payload;
        }
    }
});

export const { openProfile } = homeSlice.actions

export default homeSlice.reducer