import React from 'react';
import { useSelector } from 'react-redux';
import { useMeQuery } from 'src/graphql/user.api';
import { RootState } from 'src/store';

function DashboardTemplate() {
  const { data } = useMeQuery();
  const auth = useSelector((state: RootState) => state.auth);
  console.log(data);
  console.log(auth);
  return (
    <div>
      <div>DashboardTemplate</div>
    </div>
  );
}

export default DashboardTemplate;
