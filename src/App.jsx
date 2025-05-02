import "./App.css";
import "./index.css";
import { LoadingScreen } from "./assets/Components/LoadingScreen";
import { Navbar } from "./assets/Components/Navbar";
import { MobileMenu } from "./assets/Components/MobileMenu";
import { Home } from "./assets/Components/Sections/Home";
import { About } from "./assets/Components/Sections/About";
import { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && (
        <LoadingScreen
          onComplete={() => {
            setIsLoaded(true);
          }}
        />
      )}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
    </>
  );
}

export default App;
