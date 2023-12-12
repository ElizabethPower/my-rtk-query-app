import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PostList from './PostList';
import PostDetail from './PostDetail';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" exact element={PostList} />
          <Route
            path="/post/:id"
            render={({ match, history }) => {
              const postId = parseInt(match.params.id);
              return <PostDetail post={{ id: postId, title: 'Заголовок', body: 'Описание' }} history={history} />;
            }}
          />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
