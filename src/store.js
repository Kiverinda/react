import { configureStore } from '@reduxjs/toolkit'
import chatsReducer from './Chats/chatsSlice'

export default configureStore({
  reducer: {
    chats: chatsReducer
  }
})