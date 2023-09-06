import { Header } from './Header.jsx';
import { Nav } from './Nav.jsx';
import { Footer } from './Footer.jsx';
import { Outlet } from 'react-router-dom';

export const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header title="React Social Web Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />

    </div>
  )
}
