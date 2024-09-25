import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'src/graphql/api';
import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'iws',
  storage,
  whitelist: ['token', 'user'] // Specify the keys to persist if necessary
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    }).concat(baseApi.middleware)
});

export const persistedStore = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
