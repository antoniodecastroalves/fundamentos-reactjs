import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css';

export function App() {
  return (
      <>
        <Header />
        <Post
        author="Antonio Alves"
        content="lorem ipsum dolor sit amet, consectetur adip. elit, sed do eiusmod tempor incididunt ut lab"
      />
      <Post
      author="Ernesto Alves"
      content="New lorem ipsum dolor sit amet."
    />
      </>
  )
}
