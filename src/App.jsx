import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import TeamMember from "./components/TeamMember/TeamMember";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team/:id" element={<TeamMember />} />
    </Routes>
  );
}