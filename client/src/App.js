import React from "react";
import PostCreate from "./components/PostCreate";
import PostList from "./PostList";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <h1>Create Post</h1>
      <PostCreate />
      <hr></hr>
      <h1><PostList/></h1>
    </div>
  );
}

export default App;
