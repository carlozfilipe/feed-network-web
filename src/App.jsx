import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author: { avatarUrl: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carlozfilipe.png',
      name: 'Carlos Filipe',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. O nome do projeto é Feed Network. 🔥' },
      { type: 'link', content: 'https://feed-network.netlify.app' }
    ],
    publishedAt: new Date(),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ry.png',
      name: 'Ryan Dahl',
      role: 'NodeJS creator'
    },
    content: [
      { type: 'paragraph', content: 'Hi, guys!' },
      { type: 'paragraph', content: 'I just created a project called Deno. 🚀' },
      { type: 'link', content: 'https://deno.com' }
    ],
    publishedAt: new Date('2024-06-08 12:00:00'),
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map( post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
          )
          })}
        </main>
      </div>
    </>
  );
}
