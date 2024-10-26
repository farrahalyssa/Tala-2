import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../../utils/User/GetUserData';
import { User } from '../../utils/User/UserType';
import NavBar from '../NavBar';
import AddPost from '../Posts/AddPost';
import Posts from '../Posts/Posts';
import { handleReload } from '../../utils/HandleReload';

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  // Fetch user data once on mount
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
      <h1 className="text-center mt-20 text-xl text-gray-300">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="flex justify-center w-full px-4">
        <div
          className="
            w-full 
            sm:w-[280px] 
            md:w-[480px] 
            lg:w-[660px] 
            xl:w-[900px]             
            p-6 
            md:p-10 
            shadow-lg 
            rounded-lg
          "
        >
          <AddPost />

            <Posts />
        </div>
      </main>
    </div>
  );
};

export default Home;
