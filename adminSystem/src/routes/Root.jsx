import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'




export default function Root() {

  return (
    <>
      <div className="App">
        <header> <Header />
        </header>
        <nav><Navbar /></nav>
        <aside><Sidebar /></aside>
        <main><Outlet /></main>
        <footer><Footer /></footer>
      </div>

    </>
  )
}
