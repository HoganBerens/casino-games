import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Mines from "../Mines/Mines";
import Roulette from "../Roulette/Roulette";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="app-main">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/mines" element={<Mines user={user} />} />
            <Route path="/roulette" element={<Roulette user={user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
