import { Post } from './Post';
import { Header } from './components/Header/Header';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';

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
