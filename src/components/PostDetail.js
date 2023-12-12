
import React from 'react';

const PostDetail = ({ post, history }) => {
  return (
    <div>
      <h1>Полная информация о посте</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => history.goBack()}>Назад</button>
    </div>
  );
};

export default PostDetail;
