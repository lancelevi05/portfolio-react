import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import TeamMember from "./components/TeamMember/TeamMember";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:id" element={<TeamMember />} />
      </Routes>
    </BrowserRouter>
  );
}