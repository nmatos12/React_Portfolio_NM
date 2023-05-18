import React, { useState } from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("About");

  const showPage = () => {
    if (page === "About") {
      return <AboutMe />;
    }
    if (page === "Portfolio") {
      return <Portfolio />;
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