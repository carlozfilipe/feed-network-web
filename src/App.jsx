import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Alan Turing"
        content="Aqui vamos ver tudo sobe Linguagens e Autômatos."
      />

      <Post
        author="Isaac Newton"
        content="Conteúdo de um post muito louco sobre Espaços de Sobolev."
      />
    </>
  );
}
