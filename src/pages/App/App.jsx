import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
