import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem, getItem } from "../../utilities/utilities";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";
import "./BodyContainer.css";

const BodyContainer = () => {
  const [readMin, setReadMin] = useState(getItem("Total_Time") || 0);
  const [bookmark, setBookMark] = useState(getItem("bookmark") || []);

  const toastNotify = () => {
    toast.warn("You Have Already Bookmarked This Blog.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const readTime = (time) => {
    setReadMin((prev) => prev + time);
  };
  const getTitle = (title) => {
    const isExits = bookmark.includes(title)

    if(isExits) toastNotify()

    setBookMark((preValue) => [...preValue, title]);
  };

  useEffect(() => {
    addItem("Total_Time", readMin);
    addItem("bookmark", bookmark);
  }, [readMin, bookmark]);

  return (
    <div className="container">
      <Blog readTime={readTime} getTitle={getTitle} />
      <Sidebar totalReadTime={readMin} bookmarks={bookmark} />
      <ToastContainer/>
    </div>
  );
};

export default BodyContainer;
