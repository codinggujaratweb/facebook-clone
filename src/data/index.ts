import { IPost } from '../types/post';
import { IStory } from '../types/user';

export const postsData: IPost[] = [
  {
    _id: '1',
    user: {
      _id: '1',
      username: 'Mike',
      fullName: 'Mike Wheeler',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    caption: 'This is post caption',
    image: 'https://images.unsplash.com/photo-1479186479563-2af7090284c6?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 129,
    comments: 5,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    user: {
      _id: '1',
      fullName: 'Mike Wheeler',
      username: 'Mike',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    caption: 'This is post caption',
    image: 'https://images.unsplash.com/photo-1718471480244-57cde007369c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 798,
    comments: 52,
    shares: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '3',
    user: {
      _id: '1',
      fullName: 'Mike Wheeler',
      username: 'Mike',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    caption: 'This is post caption',
    image: 'https://images.unsplash.com/photo-1718880474770-1952b4e5f37c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 456,
    comments: 15,
    shares: 80,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '4',
    user: {
      _id: '1',
      fullName: 'Mike Wheeler',
      username: 'Mike',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    caption: 'This is post caption',
    image: 'https://plus.unsplash.com/premium_photo-1681429766540-f05bd18b4002?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 29,
    comments: 1,
    shares: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const storiesData: IStory[] = [
  {
    _id: '1',
    image: 'https://plus.unsplash.com/premium_photo-1681429766540-f05bd18b4002?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    user: {
      _id: '1',
      fullName: 'Mike Wheeler',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
  {
    _id: '2',
    image: 'https://images.unsplash.com/photo-1718978311737-84e744bad193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    user: {
      _id: '1',
      fullName: 'Mike',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
  {
    _id: '4',
    image: 'https://images.unsplash.com/photo-1718906457196-3d3523107ef0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    user: {
      _id: '1',
      fullName: 'Ovy Bin',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
  {
    _id: '5',
    image: 'https://images.unsplash.com/photo-1626245896055-d2980d045a36?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    user: {
      _id: '1',
      fullName: 'Antor',
      dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    createdAt: new Date(),
  },
];
