import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import "animate.css";

function App() {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    if (counter < 3) setCounter(counter + 1);
  }, 1000);

  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </main>
  );
}

export default App;
