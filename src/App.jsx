import React, { useEffect, useState } from "react";

import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

const theme = "s";
function App() {
    return (
        <>
            <button
                type="button"
                // onClick={handleThemeSwitch}
                className="fixed p-2 z-10 right-20 top-4 bg-violet-300 text-lg p-1 rounded-md"
            >
                {theme === "light" ? "🌙" : "🌞"}
            </button>
            <div className="App">
                <Intro />
                <Portfolio />
                <Timeline />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
