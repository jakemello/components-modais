import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PaginaDeTeste from './pages/PaginaDeTesteModal'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<PaginaDeTeste />} />
        
      </Routes>
    </Router>
  )
}