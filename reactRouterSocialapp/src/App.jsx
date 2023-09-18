
import { Layout } from './Layout.jsx';
import { Home } from './Home.jsx';
import { PostPage } from './PostPage.jsx';
import EditPost from './EditPost.jsx';
import { NewPost } from './NewPost.jsx';
import { About } from './About.jsx';
import { Missing } from './Missing.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import api from './api/posts.js'
import useWindowSize from './hooks/useWindowSize.js';




function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          // not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts();
  }, [])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
      || ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };

    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (error) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => post.id === id ? { ...response.data } : post));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (error) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postslist = posts.filter(post => post.id !== id);
      setPosts(postslist);
      navigate('/');
    } catch (error) {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <Routes>
      < Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
        width={width}
      />}>
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post/:id" element={<PostPage
          posts={posts}
          handleDelete={handleDelete}
        />} />
        <Route path="edit/:id" element={<EditPost
          posts={posts}
          handleEdit={handleEdit}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editBody={editBody}
          setEditBody={setEditBody}
        />} />
        <Route path="newpost" element={<NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
        />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App
