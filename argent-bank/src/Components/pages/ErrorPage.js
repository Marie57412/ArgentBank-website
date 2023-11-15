import NOTFOUND from "../assets/404.png";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <>
      <img className="notfoundimg" src={NOTFOUND} alt="Argent Bank Logo" />
      <Link className="notfound" to="/">
        <h1 className="">Retour à l'accueil</h1>
      </Link>
    </>
  );
}

export default ErrorPage;
