
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
      title: "Arsenal beat ManUtd 3-1",
      datetime: "September 05, 2023 11:17:35 AM",
      body: "Erik ten Hag was not pleased with a number of refereeing decisions he felt went against his Man Utd side in their 3-1 defeat to Arsenal."
    },
    {
      id: 2,
      title: "Academy Action: See Nwaneri’s lob and more!",
      datetime: "September 05, 2023 12:17:35 PM",
      body: "Our two academy sides had fixtures on the weekend and you can see everything in one place with Academy Action!Jack Wilshere’s under-18s began their U18 Premier League Cup group with a 1-1 draw against West Ham United, while Mehmet Ali’s under-21s got back to winning ways with a 3-0 victory over Reading in Premier League 2.West Ham were reduced to ten men when goalkeeper Fin Herrick was sent off for a foul on Louie Copley outside the penalty area. He was replaced by left winger Liam Jones in goal.Jones spilled a Michal Rosiak free-kick into the path of Harrison Dudziak, who gave us the lead, but the away side responded courtesy of Josh Ajala. With Derby County and Middlesbrough drawing their game 2-2 in Group B of the U18 Premier League Cup, we are all level on one point after one round of matches."
    },
    {
      id: 3,
      title: "Ticket information: Arsenal v RC Lens",
      datetime: "September 05, 2023 14:17:35 PM",
      body: "Ticketing information for our UEFA Champions League fixture against RC Lens, which will take place at the Emirates Stadium on Wednesday November 29, at 8pm. This will be a Category B fixture (pricing and information on match categorisation).Please note that all three home UEFA Champions League group stage games are included within the cost of the Arsenal Season Ticket."
    },
    {
      id: 4,
      title: "ARSENAL ANALYSIS | HOW WE BEAT MANCHESTER UNITED",
      datetime: "September 05, 2023 16:17:35 PM",
      body: "Sunday's 3-1 win against Manchester United was an afternoon many Gooners will struggle to forget for years to come, but did you spot some of the key things that led us to the three points? Adrian Clarke has dissected the game again to highlight five key things that helped us overcome Erik ten Hag's team and record our third win from four to kick off the campaign."
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
