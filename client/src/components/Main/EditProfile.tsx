import React, { useEffect, useState, ChangeEvent } from 'react';
import { User } from '../../utils/User/UserType';
import { getUserData } from '../../utils/User/GetUserData';
import { handleReload } from '../../utils/HandleReload';
import NavBar from '../NavBar';
import api from '../../utils/api';

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    const userData = getUserData();
    if (!userData) {
      handleReload();
    } else {
      setUser(userData);
      setFirstName(userData.firstName || '');
      setLastName(userData.lastName || '');
      setBio(userData.bio || '');
      setProfilePicture(userData.profile?.profilePicture || '');
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
    if (name === 'bio') setBio(value);
  };

  const handleSaveChanges = async () => {
    if (!user) return;

    const updatedUser = {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(bio && { bio }),
      ...(profilePicture && { profilePicture }),
    };

    try {
      const response = await api.put(`users/profile/${user.userId}`, updatedUser);

      if (response.status === 200) {
        console.log('Profile updated:', response.data.user);
        handleReload('profile');
      } else {
        console.error('Failed to update profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center">
      <NavBar />
            <img
              src={profilePicture || 'https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg'}
              alt="user-avatar"
              className="rounded-circle border-4 mt-5 border-dark mb-3"
              style={{ width: '8rem', height: '8rem' }}
            />

            <div className="w-100 px-6 ">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="form-control my-3 rounded p-2 border border-dark bg-transparent"
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="form-control my-3 rounded p-2 border border-dark bg-transparent"
              />
              <textarea
                name="bio"
                value={bio}
                onChange={handleInputChange}
                placeholder="Write a short bio..."
                rows={3}
                className="form-control my-3 border-round border border-dark bg-transparent"
              />
            </div>
            <div className="w-100 px-4">
              <button
                onClick={handleSaveChanges}
                className="btn btn-dark btn btn-dark w-50 px-6 py-2 rounded-pill w-100 font-weight-semibold"
              >
                Save Changes
              </button>
            </div>

    </div>
  );
};

export default EditProfile;
