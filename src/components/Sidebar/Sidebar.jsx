import React from 'react'
import './Sidebar.css'
import BookMark from './BookMark/BookMark';
import SpendTime from './SpendTime/SpendTime';


const Sidebar = ({ totalReadTime, bookmarks }) => {
  return (
    <div className="sidebar_container">
      <SpendTime totalReadTime={totalReadTime} />
      <BookMark bookmarks={bookmarks} />
    </div>
  );
};

export default Sidebar