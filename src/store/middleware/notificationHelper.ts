import { NotificationProps } from 'src/types/customTypes';
import { notificationSlice } from '../slices/notificationSlice';

const isProduction = process.env.NODE_ENV === 'production';

/** Util. */
export function addAction({
  id,
  title,
  message,
  action,
  variant
}: Pick<NotificationProps, 'variant' | 'id' | 'title' | 'message' | 'action'>) {
  return notificationSlice.actions.addOne({
    id,
    title,
    message,
    state: 'done',
    severity: 'success',
    variant,
    action
  });
}

/** Action. */
export function loadingAction(id: string, message?: string) {
  return notificationSlice.actions.addOne({
    id,
    message: message || 'Loading...',
    state: 'loading',
    variant: 'default',
    severity: 'info'
  });
}

/** Action. */
export function successAction(id: string, message?: string) {
  return notificationSlice.actions.updateOne({
    id,
    changes: { message: message || 'Success...', severity: 'success', icon: 'Done', state: 'done', variant: 'default' }
  });
}

/** Action. */
export function errorAction(id: string, message?: string) {
  return notificationSlice.actions.updateOne({
    id,
    changes: { message: message || 'Failed', state: 'done', variant: 'default', severity: 'error' }
  });
}

/** Action. */
export function commonErrorAction(id: string, message?: string, data?: string) {
  const messageFromData = data ? JSON.parse(data)?.payload?.data : '';
  return notificationSlice.actions.addOne({
    id,
    message: message || messageFromData || `Something went wrong, see console for details. ID: ${id}`,
    data: isProduction ? null : data || null,
    state: 'done',
    variant: 'default',
    severity: 'error',
    autoHideDuration: null
  });
}
