import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counter'
import userDetailReducer from './reducer/userDetail'



const store = configureStore({
  reducer: {
    counter: counterReducer,
    userDetailReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch