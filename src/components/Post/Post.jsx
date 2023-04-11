import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import postImg from '../../assets/postphoto.jpg'
import userImg from '../../assets/user.jpg'
import './Post.css'

const Post = ({ post, readTime, getTitle }) => {
  // const { post } = post
  // console.log(post)

  return (
    <div className="post">
      <div className="img">
        <img src={post.post_img} alt={post.b_title} />
      </div>
      <div className="post_info">
        <div className="user_info">
          <div className="user_info_img">
          <img src={post.author_img} alt="" />
          </div>
          <div className="name_date">
            <h4>{post.author_name}</h4>
            <p>{post.post_date}</p>
          </div>
        </div>
        <div className="min-bkmark">
          <h5>{post.read_time} min to read</h5>
          <a
            href="#"
            className="bookMark"
            onClick={(e) => {
              e.preventDefault();
              getTitle(post.b_title);
            }}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </a>
        </div>
      </div>
      <h2>{post.b_title}</h2>
      <a
        href="#"
        className="post_link"
        onClick={(e) => {
          e.preventDefault();
          readTime(post.read_time);
        }}
      >
        Mark as read
      </a>
    </div>
  );
};

export default Post