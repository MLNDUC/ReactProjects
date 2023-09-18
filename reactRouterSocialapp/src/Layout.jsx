import { Header } from './Header.jsx';
import { Nav } from './Nav.jsx';
import { Footer } from './Footer.jsx';
import { Outlet } from 'react-router-dom';

export const Layout = ({ search, setSearch, width }) => {
  return (
    <div className="App">
      <Header title="London is red blog - React Js" width={width} />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />

    </div>
  )
}
