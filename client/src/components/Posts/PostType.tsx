export interface Post {
    id: string;
    userName: string;
    userAvatar: string;
    description: string;
    createdAt: string;
    likes: number;
    comments: { id: string; content: string }[];
  }