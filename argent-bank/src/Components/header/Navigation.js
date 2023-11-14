import LOGO from '../../assets/argentBankLogo.webp';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={LOGO}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in">

          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
