import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import { Post } from './PostType';
import api from '../../utils/api';
import { User } from '../../utils/User/UserType';
import { getUserData } from '../../utils/User/GetUserData';
import { handleReload } from '../../utils/HandleReload';
import Loading from '../../utils/loading';
const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = getUserData();
    if (!userData) {
      handleReload();
    } else {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (user?.userId) {
        try {
          const response = await api.get(`/post/user/${user.userId}/posts`);
          setPosts(response.data);
        } catch (error) {
          console.error('Error fetching user posts:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserPosts();
  }, [user]);

  if (loading) {
    return (
      <div>
      <Loading/>
      </div>
    );
  }
  
  return (
    <div className="mt-10 space-y-8">
      <div className="space-y-6">
        {user && posts.length === 0 ? (
          <p className="text-gray-400 text-center">No posts yet. Be the first to post!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="p-4 rounded-md text-white">
              <div className="flex space-x-3 mb-1">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
                  alt={`${post.userName}'s avatar`}
                />
                <div className="text-left">
                  <p className="font-semibold">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-sm text-gray-400">{post.createdAt}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-left ml-14">{post.description}</p>

              <div className="flex space-x-4 mt-4">
                <button
                  className="flex items-center space-x-1 bg-transparent text-gray-400 hover:text-red-500"
                  onClick={() =>
                    setPosts((prev) =>
                      prev.map((p) =>
                        p.id === post.id ? { ...p, likes: p.likes + 1 } : p
                      )
                    )
                  }
                >
                  <FaHeart size={16} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-400 bg-transparent">
                  <FaComment size={16} />
                  <span>{post.comments.length}</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
