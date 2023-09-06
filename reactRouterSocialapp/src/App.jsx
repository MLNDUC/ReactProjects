
import { Layout } from './Layout.jsx';
import { Home } from './Home.jsx';
import { PostPage } from './PostPage.jsx';
import { NewPost } from './NewPost.jsx';
import { About } from './About.jsx';
import { Missing } from './Missing.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { format } from 'date-fns'




function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1. Arsenal beat ManUtd 3-1",
      datetime: "September 05, 2023 11:17:35 AM",
      body: "Erik ten Hag was not pleased with a number of refereeing decisions he felt went against his Man Utd side in their 3-1 defeat to Arsenal."
    },
    {
      id: 2,
      title: "2. Arsenal beat ManUtd 3-1",
      datetime: "September 05, 2023 12:17:35 PM",
      body: "Arsenal struck twice in injury time to stun Manchester United with a 3-1 win at the Emirates on Sunday."
    },
    {
      id: 3,
      title: "3. Arsenal beat ManUtd 3-1",
      datetime: "September 05, 2023 14:17:35 PM",
      body: "Marcus Rashford's two second-half goals inflicted Arsenal's first defeat of the season as Manchester United won 3-1 at Old Trafford after Antony"
    },
    {
      id: 4,
      title: "4. Arsenal beat ManUtd 3-1",
      datetime: "September 05, 2023 16:17:35 PM",
      body: "Arsenal enter the international break unbeaten in the Premier League with 10 points from a possible 12 – just two points off leaders Manchester "
    },
  ])

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLocaleLowerCase()).includes(search.toLocaleLowerCase())
      || ((post.title).toLocaleLowerCase()).includes(search.toLocaleLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost]

    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

  const handleDelete = (id) => {
    const postslist = posts.filter(post => post.id !== id);
    setPosts(postslist);
    navigate('/');
  }

  return (

    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
      />}>
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route index element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />} />
          <Route path="/post/:id" element={<PostPage
            posts={posts}
            handleDelete={handleDelete}
          />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App
