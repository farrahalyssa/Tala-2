import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import { Post } from './PostType';


const fakePosts: Post[] = [
  {
    id: '1',
    userName: 'Farrah Pepino',
    userAvatar: 'https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg',
    content: 'Excited about the new project I’m working on!',
    createdAt: 'October 22 at 12:30 AM',
    likes: 3,
    comments: [{ id: 'c1', content: 'That’s awesome!' }],
  },
  {
    id: '2',
    userName: 'Farrah Pepino',
    userAvatar: 'https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg',
    content: 'Loving this weather! ☀️',
    createdAt: 'October 21 at 9:15 PM',
    likes: 7,
    comments: [{ id: 'c2', content: 'Same here!' }],
  },
];

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(fakePosts);
  }, []);


  return (
    <div className="mt-10 space-y-8">

      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-gray-400 text-center">No posts yet. Be the first to post!</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="p-4 rounded-md   text-white"
            >
              <div className="flex  space-x-3 mb-2">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={post.userAvatar}
                  alt={`${post.userName}'s avatar`}
                />
                <div className='text-left'>
                  <p className="font-semibold">{post.userName}</p>
                  <p className="text-sm text-gray-400">{post.createdAt}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-left ml-14">{post.content}</p>

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
