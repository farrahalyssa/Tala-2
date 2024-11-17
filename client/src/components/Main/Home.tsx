import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../utils/User/GetUserData';
import { User } from '../../utils/User/UserType';
import NavBar from '../NavBar';
import AddPost from '../Posts/AddPost';
import Posts from '../Posts/Posts';
import Loading from '../../utils/loading';
import { handleReload } from '../../utils/HandleReload';

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserData();

    if (!userData) {
      handleReload();
    } else {
      setUser(userData);
    }
  }, []);

  if (!user) {
    return (
      <Loading />
    );
  }

  return (
    <div className="min-h-screen flex flex-col ">
    <NavBar />
    <main className="flex flex-col justify-center w-full px-4">

    <div className="mt-4 mx-auto w-full max-w-4xl">
        <AddPost />
        <Posts userId={user?.userId || user?._id}/>
      </div>
    </main>
      </div>
  );
};

export default Home;
