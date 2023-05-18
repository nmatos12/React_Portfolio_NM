import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


function App() {
  const [page, setPage] = useState("About");

  const showPage = () => {
    if (page === "About") {
      return <About />;
    }
    if (page === "Projects") {
      return <Projects />;
    }
    if (page === "Resume") {
      return <Resume />;
    }
    if (page === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <>
      <Header page={page} handlePageChange={handlePageChange} />

      {showPage()}
      <Footer />
    </>
  );
}

export default App;
