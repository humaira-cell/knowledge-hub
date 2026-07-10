import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import PhilosopherDetail from './pages/PhilosopherDetail'
import BookDetail from './pages/BookDetail'
import Reader from './pages/Reader'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/catalog" element={<Layout><Catalog /></Layout>} />
      <Route path="/philosopher/:slug" element={<Layout><PhilosopherDetail /></Layout>} />
      <Route path="/book/:slug" element={<Layout><BookDetail /></Layout>} />
      <Route path="/book/:slug/read" element={<Reader />} />
    </Routes>
  )
}
