import { IconProps } from 'src/components/Icon';
import type { FilterInput, InputMaybe } from './resolvers-types';

export type FilterArgs = InputMaybe<Array<InputMaybe<FilterInput>>>;

export type MessageReturn = {
  message: string;
};

export type NotificationProps = {
  id: string;
  severity: 'success' | 'error' | 'info' | 'warning';
  variant: 'default' | 'dark';
  icon?: IconProps['name'];
  title?: string;
  message: string;
  data?: string | null;
  state: 'loading' | 'done';
  autoHideDuration?: number | null;
  action?: {
    href: string;
    label: string;
  };
};
