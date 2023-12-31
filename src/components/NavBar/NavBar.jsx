import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar(props) {
  let user = props.user;
  let setUser = props.setUser;
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>&nbsp; | &nbsp;
      <span> Welcome, {user.name} to Casino-Games!</span>
      &nbsp; | &nbsp;Balance: {user.balance}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
