import { useState } from "react";
import { Routes, Route } from "react-router";
import { Header, Footer } from "./components";
import { Home, Portfolio, Contact, Details } from "./pages";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(!openMenu);
  return (
    <main className="w-full max-w-full overflow-x-hidden px-[10%] pt-[10%] sm:pt-[5%] lg:pt-[3%]">
      <Header openMenu={openMenu} onOpenMenu={handleOpenMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<Details />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
