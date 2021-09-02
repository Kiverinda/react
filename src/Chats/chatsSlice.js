import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        arrayChats: []
  },
  reducers: {
    addNewChat: (state, action) => {
        state.arrayChats.push(action.payload)
      },
    addNewMessage: (state, action) => {
        state.arrayChats[action.payload.idChat].messages.push(action.payload.newMessage)
    }
  }
});

export const { addNewChat, addNewMessage } = chatsSlice.actions

export default chatsSlice.reducer