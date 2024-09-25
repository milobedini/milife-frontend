import Button from '@mui/material/Button';
import { useMyTaskCompletionsQuery } from 'src/graphql/task.api';
import { getDateTime } from 'src/utils/getDateTime';
import ErrorStates from '../ErrorStates/ErrorStates';
import { Icon } from '../Icon';

function DashboardTemplate() {
  const { data, isError, isLoading } = useMyTaskCompletionsQuery({});

  if (isError || isLoading || !data) {
    return <ErrorStates apiError={isError} apiLoading={isLoading} noContent={!data} />;
  }

  return (
    <div className="pt-4">
      <div className="flex items-center">
        <Button
          variant="contained"
          color="secondary"
          href="/picker"
          endIcon={<Icon name="Add" href="/picker" color="info" />}
        >
          Add activities
        </Button>
      </div>
      <div>
        <h2>Recent Activity</h2>
        <div>
          {data.map((task) => (
            <div key={task.id}>
              <h3>{task.userTask.task.name}</h3>
              <p>{getDateTime(task.date, 'en-GB')}</p>
              {task.completed && <Icon name="Check" color="secondary" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardTemplate;
