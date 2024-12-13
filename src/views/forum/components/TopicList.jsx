import React from 'react';

const topics = [
  { title: 'Need a client', category: 'Graphic Design', time: '1h', replies: 2 },
  { title: 'How is my logo? Should I even use one?', category: 'Student Forum', time: '2h', replies: 15 },
  { title: 'A vs. a', category: 'Typography', time: '3h', replies: 4 },
  { title: 'I\'m Sonny', category: 'Introduce Yourself', time: '11h', replies: 3 },
  { title: 'Best Practices For Email Campaign Creation', category: 'Design, Email', time: '14h', replies: 5 },
  { title: 'How to learn the standard practice...', category: 'Typography', time: '16h', replies: 6 },
  { title: 'Turning down a client', category: 'Graphic Design', time: '22h', replies: 33 },
];

const TopicList = () => {
  return (
    <div className="w-3/4 bg-gray-900 p-4">
      {topics.map((topic, index) => (
        <div key={index} className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
          <div>
            <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
            <p className="text-sm text-gray-400">{topic.category}</p>
          </div>
          <div className="text-gray-400">
            <span>{topic.replies}</span>
            <span className="ml-2">{topic.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
