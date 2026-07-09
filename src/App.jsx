import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import PhilosopherDetail from './pages/PhilosopherDetail'
import BookDetail from './pages/BookDetail'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/philosopher/:slug" element={<PhilosopherDetail />} />
        <Route path="/book/:slug" element={<BookDetail />} />
      </Routes>
    </Layout>
  )
}
