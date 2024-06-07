import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Alan Turing"
            content="Aqui vamos ver tudo sobe Linguagens e Autômatos."
          />

          <Post
            author="Isaac Newton"
            content="Conteúdo de um post muito louco sobre Espaços de Sobolev."
          />
        </main>
      </div>
    </>
  );
}
