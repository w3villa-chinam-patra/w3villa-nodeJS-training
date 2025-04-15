import Header from './header/Header';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div className="bg-cyan-50 h-screen">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout