import "./style.css";
import logo from "../../assets/logo.svg"
import profile from "../../assets/profile.jpeg"

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="welcome">
        <img className="profile-image" src={profile} alt="profile" />
        <span>Bem vindo, Lucas.</span>
      </div>
    </header>
  )
}

export default Header;