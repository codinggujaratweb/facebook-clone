import React from 'react';
import { storiesData } from '../../../data';
import CreatePostBox from '../../atoms/post/CreatePostBox';
import Story from '../../atoms/story';
import PostContainer from '../../container/PostContainer';

const NewsFeed: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {/* Story Section */}
      <div className="w-full h-full flex items-center justify-center space-x-2 overflow-hidden cursor-pointer my-6">
        <div
          className="w-28 h-48 relative rounded-xl shadow "
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1718954572423-2780fe600028?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div
            className="w-full absolute flex justify-center"
            style={{ bottom: '13%' }}
          >
            <button className="focus:outline-none z-40 w-10 h-10 bg-primary rounded-full border-4 border-white">
              <i className="text-white fas fa-plus"></i>
            </button>
          </div>
          <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
            <p className="text-gray-500 text-sm font-semibold">Create Story</p>
          </div>
        </div>
        {storiesData.length
          ? storiesData.map((story, idx) => <Story key={idx} story={story} />)
          : null}
      </div>
      {/* Create Post       */}
      <CreatePostBox />
      {/* All posts */}
      <PostContainer />
    </div>
  );
};

export default NewsFeed;
