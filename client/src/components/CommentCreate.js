import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
    console.log(content);
  };
  return (
    <div>
      <form className='form-group' onSubmit={onSubmit}>
        <div>
          <label>
            <h5>New Comment</h5>
          </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='form-control'
          ></input>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
