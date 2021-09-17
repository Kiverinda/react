import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import chatsReducer from './Chats/chatsSlice'
import profileReducer from './Profile/profileSlice'
import homeReducer from './Home/homeSlice'
import testReducer  from './Test/testSlice'
import thunkMiddleware from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['test']
  //blacklist: ['test']
};

const reducers = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  home: homeReducer,
  test: testReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware]
})