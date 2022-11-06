import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogSingle from "./Components/BlogSingle/BlogSingle";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="blog/:id" element={<BlogSingle />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
