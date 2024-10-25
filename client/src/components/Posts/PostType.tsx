export interface Post {
    id: string;
    userName: string;
    userAvatar: string;
    content: string;
    createdAt: string;
    likes: number;
    comments: { id: string; content: string }[];
  }