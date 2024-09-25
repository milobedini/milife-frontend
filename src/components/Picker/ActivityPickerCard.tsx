import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useAddMyTaskMutation, useRemoveMyTaskMutation } from 'src/graphql/task.api';
import { breakpoints } from 'src/styles/mui/breakpoints';
import { Task } from 'src/types/resolvers-types';
import { Icon } from '../Icon';

type ActivityPickerCardProps = {
  task: Task;
  saved: boolean;
};

function ActivityPickerCard({ task, saved }: ActivityPickerCardProps) {
  const [addTask] = useAddMyTaskMutation();
  const [removeTask] = useRemoveMyTaskMutation();

  const handleAddTask = async () => {
    try {
      await addTask({ id: task.id });
      //   Do other stuff
    } catch (error) {
      // console.error(error);
    }
  };

  const handleRemoveTask = async () => {
    try {
      await removeTask({ id: task.id });
      //   Do other stuff
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div className="shadow-prominent shadow-primary">
      {/* Image */}
      <div className="relative w-full">
        <Image priority alt="focus-image" src={task.image || ''} width={breakpoints.values.lg} height={80} />
      </div>
      {/* Title & Description */}
      <div className="flex flex-col items-center gap-1 bg-primary-600 px-4 pb-1">
        <h3>{task.name}</h3>
        <p className="text-nowrap">{task.description}</p>
        {saved ? (
          <Button
            endIcon={<Icon name="RemoveCircleIcon" color="info" />}
            variant="contained"
            color="error"
            fullWidth
            onClick={handleRemoveTask}
          >
            Remove
          </Button>
        ) : (
          <Button
            endIcon={<Icon name="AddCircleOutlineIcon" color="info" />}
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ color: 'black' }}
            onClick={handleAddTask}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
}

export default ActivityPickerCard;
