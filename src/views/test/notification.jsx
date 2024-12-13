import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchNotifications, markAsRead, addNotification } from '../features/notificationSlice';
import io from 'socket.io-client';
import { addNotification, fetchNotifications, markAsRead } from '../../redux/feature/notificationSlice';

const socket = io('http://localhost:5000'); // Connect to your server

const NotificationList = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const notificationStatus = useSelector((state) => state.notifications.status);

  useEffect(() => {
    if (notificationStatus === 'idle') {
      dispatch(fetchNotifications());
    }

    // Listen for incoming notifications
    socket.on('notification', (notification) => {
      dispatch(addNotification(notification)); // Add new notification to the state
    });

    // Listen for notification read events
    socket.on('notificationRead', (notificationId) => {
      dispatch(markAsRead(notificationId)); // Mark notification as read
    });

    // Cleanup on unmount
    return () => {
      socket.off('notification');
      socket.off('notificationRead');
    };
  }, [notificationStatus, dispatch]);

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
    // Optionally, send a request to the backend to mark the notification as read
    // await axios.patch(`http://localhost:5000/api/notifications/${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Notifications</h2>
      {notificationStatus === 'loading' && <p>Loading...</p>}
      <ul>
        {notifications.map((notification) => (
          <li 
            key={notification._id} 
            className={`border p-2 ${notification.isRead ? 'bg-gray-200' : 'bg-white'}`}
            onClick={() => handleMarkAsRead(notification._id)}
          >
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;