import React, { useContext, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AccountContext } from '../../contexts/accountContext';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const { accountInfo, setAccountInfo } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await axios.get(process.env.API_PATH + '/users/email/' + user?.email);
      let userInfo = userResponse.data;

      if (!userInfo) {
        const createUserResponse = await axios.post(process.env.API_PATH + '/users', { firstName: user?.name, email: user?.email });
        userInfo = createUserResponse.data;
      }

      setAccountInfo(userInfo);

      if (!userInfo?.organizations.length) {
        router.push('/organizations/create');
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user?.picture || ''} alt={user?.name + ' profile'} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
