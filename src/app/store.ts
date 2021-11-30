import { configureStore } from '@reduxjs/toolkit';
import { reducer as rickAndMortyReducer } from '../services/rickNmorty';
import { reducer as categoriesReducer } from '../services/jokeService';

export const store = configureStore({
  reducer: {
    rickAndMorty: rickAndMortyReducer,
    categories: categoriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
