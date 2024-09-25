/* eslint-disable no-param-reassign */
// src/store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/store';
import { User } from 'src/types/resolvers-types';

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: null,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }: PayloadAction<{ user: User; token: string }>) => {
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
