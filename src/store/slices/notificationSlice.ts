import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'src/store';
import { NotificationProps } from 'src/types/customTypes';

/** Entity Adapter. https://redux-toolkit.js.org/api/createEntityAdapter */
const { addOne, removeOne, updateOne, getInitialState, getSelectors } = createEntityAdapter<NotificationProps>();

/** Slice. */
const notificationSlice = createSlice({
  name: 'notification',
  initialState: getInitialState(),
  reducers: { addOne, removeOne, updateOne }
});

/** Selector. */
const notificationsSelector = getSelectors<RootState>((state) => state.notification);

/** Exports. */
export { notificationSlice, notificationsSelector };
