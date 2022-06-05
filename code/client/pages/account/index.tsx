import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await axios.get(process.env.API_PATH + '/users/email/' + user?.email);
      const userInfo = userResponse.data;
      console.log(userInfo)

      if(!userInfo) {
        const createUserResponse = await axios.post(process.env.API_PATH + '/users', { firstName: user?.name, email: user?.email });
        const newUser = createUserResponse.data;


      }

      if (!userInfo?.organizations.length) {
        router.push('/organizations/create');
      }

      // setData(result.data);
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user?.picture} alt={user?.name + ' profile'} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
