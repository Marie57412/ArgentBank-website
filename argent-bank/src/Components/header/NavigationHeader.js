import LOGO from '../assets/argentBankLogo.webp';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { resetUser } from '../../Redux/redux';

export default function NavigationHeader({ name }) {
  const dispatch = useDispatch();

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
        <Link className="main-nav-item unclikable" to="/sign-in">
          {name}
        </Link>
        <Link
          className="main-nav-item"
          to="/sign-in"
          onClick={() => {
            dispatch(resetUser());
            localStorage.clear();
          }}
        >
          Log out
        </Link>
      </div>
    </nav>
  );
}

