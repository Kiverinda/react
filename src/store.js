import { configureStore } from '@reduxjs/toolkit'
import chatsReducer from './Chats/chatsSlice'
import profileReducer from './Profile/profileSlice'

export default configureStore({
  reducer: {
    chats: chatsReducer,
    profile: profileReducer
  }
})