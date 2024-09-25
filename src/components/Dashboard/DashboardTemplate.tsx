import { useMeQuery } from 'src/graphql/user.api';

function DashboardTemplate() {
  //
  const { data } = useMeQuery();
  console.log(data);
  return (
    <div>
      <div>DashboardTemplate</div>
    </div>
  );
}

export default DashboardTemplate;
