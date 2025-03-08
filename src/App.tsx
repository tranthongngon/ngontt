import "./app.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Header from "./layout/header/Header";
import Detail from "./pages/detail/Detail";
import MenuMobile from "./layout/menuMobile/MenuMobile";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import NavMobile from "./layout/navMobile/NavMobile";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        <div className="app__mobile" onClick={() => setShowMenu(true)}>
          <MenuMobile />
        </div>
        <AnimatePresence initial={false}>
          {showMenu ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="app__menumobile"
            >
              <NavMobile setShowMenu={setShowMenu}/>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <main className="app__main">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/work">
              <Route index element={<Work />} />
              <Route path=":name/:id" element={<Detail />} />
            </Route>
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
