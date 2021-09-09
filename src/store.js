import { configureStore } from '@reduxjs/toolkit'
import chatsReducer from './Chats/chatsSlice'
import profileReducer from './Profile/profileSlice'
import homeReducer from './Home/homeSlice'

export default configureStore({
  reducer: {
    chats: chatsReducer,
    profile: profileReducer,
    home: homeReducer
  }
})