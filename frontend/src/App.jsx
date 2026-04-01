import { Outlet } from 'react-router'
import GNB from './components/GNB'
import Footer from './components/Footer'

// 공통 레이아웃: GNB + 페이지 콘텐츠 + Footer
const Layout = () => (
  <div className='min-h-screen flex flex-col bg-[#0e0e13]'>
    <GNB />
    <main className='flex-1'>
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default Layout
