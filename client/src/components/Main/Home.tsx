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
<<<<<<< HEAD
    <div className="min-h-screen mx-auto">
    <NavBar />
    <main className="flex justify-center w-full px-4">

      <div className="w-full sm:w-[280px] md:w-[480px] lg:w-[660px] xl:w-[900px] p-6 md:p-10 shadow-lg rounded-lg mx-auto">
        <AddPost />
        <Posts userId={user?.userId || user?._id}/>
      </div>
    </main>
      </div>
=======
    <div className="min-h-screen">
      <NavBar />
      <div className="mt-4 mx-auto w-75">
          <AddPost />
            <Posts />
            </div>
    </div>
>>>>>>> f6d6bce4d1d78d3a43491a153a8f1b5c71de9659
  );
};

export default Home;
