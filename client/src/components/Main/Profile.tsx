import React, { useState, useEffect } from 'react';
import AddPost from '../Posts/AddPost';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/User/UserType';
import { getUserData } from '../../utils/User/GetUserData';
import { handleReload } from '../../utils/HandleReload';
import NavBar from '../NavBar';
import Posts from '../Posts/Posts';

const Profile = () => {
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

  return (
    <div className="w-100 min-vh-100">
      <NavBar />
    
     
            <section className="position-relative">
              <div className="d-flex flex-column align-items-center mt-4">
                <img
                  src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
                  alt="user-avatar"
                  className="rounded-circle border-4 mt-5 border-dark mb-3"
                  style={{ width: '8rem', height: '8rem' }}
                />
                <h3 className="h4 font-weight-bold text-secondary mt-3">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-muted">{user?.bio}</p>
                <div className="d-flex gap-2 mt-3" style={{ width: 290 }}>
  <button className="btn btn-dark w-50 px-6 py-2 rounded-pill">Message</button>
  <button
    onClick={() => {
      handleReload('/edit-profile');
    }}
    className="btn btn-light w-50 text-dark px-6 py-2 rounded-pill"
  >
    Edit Profile
  </button>
</div>
</div>

            </section>
            <div className="mt-4 mx-auto w-75">

              <AddPost />
              <Posts />
            </div>
     
    </div>
  );
};

export default Profile;
