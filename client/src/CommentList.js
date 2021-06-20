import React, { useState, useEffect } from "react";
import axios from "../../comments/node_modules/axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderedComments = Object.values(comments).map(comment => {
    return <li style={{fontSize : "20px"}} key={comment.id}>{comment.content}</li>;
  });

  return <div>{renderedComments}</div>;
};

export default CommentList;
