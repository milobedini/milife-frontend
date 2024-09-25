import type { Middleware } from '@reduxjs/toolkit';
import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import { Maybe } from 'src/types/resolvers-types';
import * as helpers from './notificationHelper';

/** Type defs. */
type NotificationMatcher = {
  reducerName: string;
  loadingMessage?: Maybe<string>; // if "undefined" it will show default message, if null it will omit it.
  failedMessage?: Maybe<string>;
  successMessage?: Maybe<string>;
};

/** Actions for Notifications to watch. */
const actions: NotificationMatcher[] = [
  // The reducerName is the name of the endpoint query.

  // Auth actions.
  {
    reducerName: 'registerUser',
    loadingMessage: 'Signing up...',
    failedMessage: 'Failed to sign up.',
    successMessage: 'Successfully signed up.'
  },
  {
    reducerName: 'loginUser',
    loadingMessage: 'Logging in...',
    failedMessage: 'Failed to log in.',
    successMessage: 'Successfully logged in.'
  },
  // Task actions.
  {
    reducerName: 'addMyTask',
    loadingMessage: 'Adding task...',
    failedMessage: 'Failed to add task.',
    successMessage: 'Successfully added task.'
  },
  {
    reducerName: 'removeMyTask',
    loadingMessage: 'Removing task...',
    failedMessage: 'Failed to remove task.',
    successMessage: 'Successfully removed task.'
  }
];

const excludedActions = [{ reducerName: 'resetMyForgottenPassword' }];

/**
 * Notification middleware to watch apis actions to create notifications
 * Reference: https://redux-toolkit.js.org/rtk-query/usage/error-handling#handling-errors-at-a-macro-level
 */

export const notificationMiddleware: Middleware = (store) => (next) => (action) => {
  // @ts-ignore
  const id: string = action?.meta?.requestId || '';
  // @ts-ignore
  const matchAction = actions.find((a) => a.reducerName === action?.meta?.arg?.endpointName);
  // @ts-ignore
  const matchExcludedAction = excludedActions.find((a) => a.reducerName === action?.meta?.arg?.endpointName);
  // TODO - Check type errors.

  if (matchAction) {
    if (isPending(action) && matchAction.loadingMessage !== null) {
      store.dispatch(helpers.loadingAction(id, matchAction.loadingMessage));
    }
    if (isRejected(action) && matchAction.failedMessage !== null) {
      store.dispatch(helpers.errorAction(id, matchAction.failedMessage));
    }
    if (isFulfilled(action) && matchAction.successMessage !== null) {
      store.dispatch(helpers.successAction(id, matchAction.successMessage));
    }
  }

  const isUnauthorized =
    // @ts-ignore
    !!action?.payload?.errors?.length && action?.payload?.errors[0]?.extensions?.code === ClientErrorCode.UNAUTHORIZED;
  if (!matchAction && !matchExcludedAction && !isUnauthorized) {
    if (isRejected(action)) {
      store.dispatch(helpers.commonErrorAction(id, undefined, JSON.stringify(action, null, 2)));
    }
  }

  return next(action);
};
