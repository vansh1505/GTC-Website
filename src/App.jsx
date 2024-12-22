import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Events from "./components/Events";
import Community from "./components/Community";
import Core from "./components/Core";
import Footer from "./components/Footer";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative">
        {isLoading ? (
          <div className="fixed inset-0 flex items-center bg-black justify-center z-50 animate-fadeOut">
            <img
              src="logo.png"
              alt="GTC Logo"
              className="w-96 animate-zoomIn"
            />
          </div>
        ) : (
          <div className="">
            <Navbar />
            <Slider/>
            <Events />
            <Community />
            <Core/>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
