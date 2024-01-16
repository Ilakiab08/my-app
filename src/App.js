// src/App.js
import React from 'react';
import Layout from './components/layout';
import Card from './components/card';
import posts from './data/posts';

function App() {
  return (
    <Layout>
      <header>
        <h1>My React App</h1>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        {posts.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} />
        ))}
      </main>
      <footer>
        <div>
          <h3>Connect with us</h3>
          <div>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default App;
