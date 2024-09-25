import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { Icon } from 'src/components/Icon';
import { notificationSlice, notificationsSelector } from 'src/store/slices/notificationSlice';

function TransitionRight(props: SlideProps) {
  return <Slide {...props} direction="right" />;
}

function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(notificationsSelector.selectAll);

  if (notifications.length === 0) {
    return null;
  }

  const {
    data,
    title,
    message,
    severity,
    icon,
    id,
    state,
    variant = 'default',
    action,
    autoHideDuration = 2000
  } = notifications[0];

  const handleClose = () => {
    dispatch(notificationSlice.actions.removeOne(id));
  };

  return (
    <Snackbar
      open
      autoHideDuration={state === 'loading' ? null : autoHideDuration}
      TransitionComponent={TransitionRight}
      onClose={handleClose}
    >
      <div className="max-w-[600px]">
        {variant === 'default' && (
          <Alert onClose={handleClose} icon={icon ? <Icon name={icon} /> : null} severity={severity}>
            <div className="flex gap-2">
              {state === 'loading' && <CircularProgress size={24} />}
              <div className="space-y-1 overflow-hidden">
                <div className="text-base">
                  {message}
                  {severity === 'error' && (
                    <Link href="/contact" className="ml-1 underline">
                      Contact us for more details.
                    </Link>
                  )}
                </div>
                {data && <pre className="flex h-[150px] overflow-auto rounded bg-white/75 p-2">{data}</pre>}
              </div>
            </div>
          </Alert>
        )}

        {variant === 'dark' && (
          <div className="bg-blue flex max-w-sm space-x-2 rounded-lg p-2">
            <div className="space-y-3">
              <div>
                {title && <div className="typo-playfair-28-1 text-white">{title}</div>}
                <div className="typo-playfair-28-1 text-white">{message}</div>
              </div>
              {action && (
                <a href={action.href} className="block text-white underline">
                  {action.label}
                </a>
              )}
            </div>
            <div>
              <IconButton
                onClick={handleClose}
                sx={{ ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}
                aria-label="Close notification"
              >
                <Icon className="text-white" name="Clear" color="inherit" />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </Snackbar>
  );
}

export default Notifications;
