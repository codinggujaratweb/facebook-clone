import React from 'react';

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-[22.5rem] h-auto py-3 ml-5">
      <ul className="w-full text-gray-600">
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/user.png"
              alt="user"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Aman Nayak</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/friends.png"
              alt="friends"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Find Friends</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="public/image/memories.png"
              alt="memories"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Memories</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/saved.png"
              alt="pages"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">saved</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/group.png"
              alt="groups"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Groups</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/video.png"
              alt="groups"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Video</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/marketplace.png"
              alt="groups"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">marketplace</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/feed.png"
              alt="pages"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Feeds</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/event.png"
              alt="pages"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Event</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/blood-donations.png"
              alt="pages"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Blood Donations</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/messenger.png"
              alt="pages"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">messenger</p>
          </div>
        </li>
        <li className="h-12 mb-2 flex items-center justify-content cursor-pointer space-x-2 p-2 rounded-md hover:bg-gray-200">
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="/public/image/Pages.png"
              alt="pages"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Pages</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
