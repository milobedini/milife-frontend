import { useDispatch } from 'react-redux';
import { notificationSlice } from 'src/store/slices/notificationSlice';
import { NotificationProps } from 'src/types/customTypes';

function useNotifications() {
  const dispatch = useDispatch();

  const notify = ({
    title,
    message,
    action,
    severity = 'info',
    variant = 'default'
  }: Pick<NotificationProps, 'title' | 'message' | 'action' | 'severity' | 'variant'>) => {
    dispatch(
      notificationSlice.actions.addOne({
        id: `${Date.now()}`,
        title,
        message,
        action,
        severity, // You can set a default severity or customize it
        variant, // Or 'dark' depending on your design
        state: 'done',
        autoHideDuration: 3000 // Set default auto-hide duration
      })
    );
  };

  return {
    notify
  };
}

export { useNotifications };
