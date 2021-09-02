import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      data: {
        name: 'Administrator',
        login: 'admin',
        password: 'admin',
        nickname: '',
        isLogin: false
        }
  },
  reducers: {
    editedName: (state, action) => {
      console.log()
      state.data.name = action.payload;
    },
    editedNickname: (state, action) => {
      state.data.nickname = action.payload;
    },
    editedLogin: (state, action) => {
      state.data.login = action.payload;
    },
    editedPassword: (state, action) => {
      state.data.password = action.payload;
    }
  }
});

export const { editedName, editedNickname, editedLogin, editedPassword } = profileSlice.actions

export default profileSlice.reducer