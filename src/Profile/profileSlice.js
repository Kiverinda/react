import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      data: {
        profile: {
          name: 'Dmitriy',
          surname: '',
          bio: '',
          login: 'admin',
          password: 'admin',
          nickname: ''
        },
        isLogin: false
        }
  },
  reducers: {
    editedProfile: (state, action) => {
      state.data.profile = action.payload;
    }
  }
});

export const { editedProfile } = profileSlice.actions

export default profileSlice.reducer