import React from 'react';
import UsersList from '../components/UsersList';

import Picture from '../../goku_ssj_chibi.png';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Tony James',
      image:
        Picture,
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
