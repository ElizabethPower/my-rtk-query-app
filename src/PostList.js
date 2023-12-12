import React from 'react';
import { useInfiniteQuery } from 'react-query';

const PostList = ({ history }) => {
  const fetchPosts = ({ pageParam = 1 }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`).then((res) =>
      res.json()
    );
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    'posts',
    fetchPosts,
    {
      getNextPageParam: (lastPage) => (lastPage.length === 0 ? undefined : lastPage.length + 1),
    }
  );

  const handlePostClick = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((post) => (
              <li key={post.id}>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
                  <button onClick={() => handlePostClick(post.id)}>Просмотр</button>
                </div>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          Загрузить еще...
        </button>
      )}
    </div>
  );
};

export default PostList;
