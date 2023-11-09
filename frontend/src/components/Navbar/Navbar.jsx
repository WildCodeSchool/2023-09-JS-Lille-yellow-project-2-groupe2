import BackBtn from "../BackBtn/BackBtn";
import TimerApp from "../TimerApp/TimerApp";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar_container">
      <BackBtn />
      <TimerApp />
    </nav>
  );
}

export default Navbar;
