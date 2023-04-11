import React from 'react'
import './BookMark.css'
import SingleBookMark from './SingleBookMark/SingleBookMark';

const BookMark = ({bookmarks}) => {
  // console.log(bookmarks)
  const totalBookMarks = bookmarks.length;
  return (
    <div className='bookmark_container'>
        <h5>Bookmarked Blogs: {totalBookMarks} </h5>
        {bookmarks.map((bookMark, index) => <SingleBookMark key={index} title={bookMark}/> )}
    </div>
  )
}

export default BookMark