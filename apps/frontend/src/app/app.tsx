import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Layout from './components/layout';
import CreatePost from './views/create-post';
import PostPage from './views/post-page';

export function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/:postId" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
