import "./app.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Header from "./layout/header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Header/>
        </div>
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
