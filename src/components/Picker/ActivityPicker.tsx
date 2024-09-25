import { useSelector } from 'react-redux';
import { useGetTasksQuery } from 'src/graphql/task.api';
import { selectCurrentUser } from 'src/store/slices/authSlice';
import ScrollTop from '../ScrollToTop';
import ActivityPickerCard from './ActivityPickerCard';

function ActivityPicker() {
  const { data: tasks, isError, isLoading } = useGetTasksQuery();
  const userId = useSelector(selectCurrentUser)?.id;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!tasks) return <p>No tasks</p>;

  return (
    <div>
      <h1 className="text-center">Pick Activities</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks?.map((task) => {
          const saved = task.users?.some((user) => user.id === userId);
          return <ActivityPickerCard key={task.id} task={task} saved={saved || false} />;
        })}
      </div>
      <ScrollTop />
    </div>
  );
}

export default ActivityPicker;
