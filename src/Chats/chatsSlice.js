import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
      arrayChats: [],
      idActiveChat: '',
      isActiveChat: false,
  },
  reducers: {
    addNewChat: (state, action) => {
        state.arrayChats.push(action.payload)
    },
    
    addNewMessage: (state, action) => {
      state.arrayChats[action.payload.idChat].messages.push(action.payload);
      if (state.isActiveChat === true && state.idActiveChat !== action.payload.idChat) {
        ++state.arrayChats[action.payload.idChat].newNoViewMessage;
      }
      state.arrayChats[action.payload.idChat].lastMessage = action.payload;
    },

    enableChat: (state, action) => {
      state.idActiveChat = action.payload.idChat;
      state.isActiveChat = true;
      state.arrayChats[state.idActiveChat].newNoViewMessage = 0;
    }
  }
});

export const { addNewChat, addNewMessage, enableChat } = chatsSlice.actions

export default chatsSlice.reducer