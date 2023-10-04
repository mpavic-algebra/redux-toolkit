import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import postsReducer from './features/posts/postsSlice'
import createSagaMiddleware from 'redux-saga'
import postsSaga from './features/posts/postsSaga'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  },
  middleware: [saga]
})

saga.run(postsSaga)