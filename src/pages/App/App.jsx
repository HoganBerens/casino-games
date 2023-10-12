import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Mines from "../Mines/Mines";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [userBalance, setUserBalance] = useState(user.balance);

  return (
    <main className="app-main">
      {user ? (
        <>
          <NavBar user={user} userBalance={userBalance} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/mines" element={<Mines user={user} userBalance={userBalance} setUserBalance={setUserBalance} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
