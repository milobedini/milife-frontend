import Button from '@mui/material/Button';
import { Icon } from '../Icon';

function DashboardTemplate() {
  //
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
      <div>DashboardTemplate</div>
    </div>
  );
}

export default DashboardTemplate;
