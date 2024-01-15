
import React from 'react';
import Layout from './components/Layout';
import Card from './components/Card';
import posts from './data/posts';

function App() {
  return (
    <Layout>
      {posts.map((post) => (
        <Card key={post.id} title={post.title} content={post.content} />
      ))}
    </Layout>
  );
}

export default App;
