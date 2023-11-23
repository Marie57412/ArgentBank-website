/// Import des bibliothèques React
import { useEffect, useState } from 'react'; // Gestion des effets et états React
import { useDispatch } from 'react-redux'; // Utilisation du gestionnaire Redux
import { useNavigate } from 'react-router-dom'; // Gestion de la navigation dans React

// Import des services
import {
  getFirstName,
  getLastName,
  getToken,
  getUserName,
} from '../../Api/Api'; // Appels aux fonctions d'API pour récupérer des données utilisateur
import signInError from '../errors/signInError'; // Gestion des erreurs de connexion

// Import des actions Redux
import {
  saveFirstName,
  saveLastName,
  saveToken,
  saveUserName,
} from '../../Redux/redux'; // Actions pour sauvegarder les données utilisateur dans le store Redux

// Composant de la page de connexion
function SignIn({
  icon, // Icône de la page de connexion
  alt, // Texte alternatif pour l'icône
  title, // Titre de la page de connexion
  form_account, // Libellé du champ "Compte"
  form_password, // Libellé du champ "Mot de passe"
  tick_text, // Texte pour la case à cocher "Se souvenir de moi"
  text_button, // Texte du bouton de connexion
}) {
  const navigate = useNavigate(); // Initialisation du gestionnaire de navigation
  const dispatch = useDispatch(); // Initialisation du gestionnaire Redux
  const [email, setEmail] = useState(''); // État pour stocker l'email entré par l'utilisateur
  const [password, setPassword] = useState(''); // État pour stocker le mot de passe entré par l'utilisateur

  useEffect(() => {
    localStorage.clear(); // Efface les données locales lors du chargement du composant
  }, []);

  // Gestionnaire d'événement pour le clic sur le bouton de connexion
  async function handleClick(e) {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    try {
      // Récupération du token d'authentification avec l'email et le mot de passe
      const token = await getToken(email, password);

      // Récupération des informations utilisateur avec le token
      const userName = await getUserName(token);
      const firstName = await getFirstName(token);
      const lastName = await getLastName(token);

      // Enregistrement des informations utilisateur dans le store Redux
      dispatch(saveToken(token));
      dispatch(saveUserName(userName));
      dispatch(saveFirstName(firstName));
      dispatch(saveLastName(lastName));

      // Stockage des informations utilisateur dans le stockage local du navigateur
      localStorage.setItem('token', token);
      localStorage.setItem('userName', userName);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);

      // Redirection vers la page utilisateur après une connexion réussie
      navigate(`/user/${userName}`);
    } catch (error) {
      // Gestion des erreurs de connexion
      signInError();
      console.log('Email ou mot de passe incorrect', error);
    }
  }

  // Rendu du composant de connexion
  return (
    <>
      {/* Affichage de l'icône */}
      <i className="fa fa-email-circle sign-in-icon">
        <img src={icon} alt={alt} />
      </i>
      {/* Affichage du titre de la page de connexion */}
      <h1>{title}</h1>
      {/* Formulaire de connexion */}
      <form>
        {/* Champ pour l'email */}
        <div className="input-wrapper">
          <label htmlFor="emailname">{form_account}</label>
          <input
            type="text"
            id="emailname"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Champ pour le mot de passe */}
        <div className="input-wrapper">
          <label htmlFor="password">{form_password}</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Case à cocher pour "Se souvenir de moi" */}
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">{tick_text}</label>
        </div>
        {/* Bouton de connexion */}
        <button type="submit" className="sign-in-button" onClick={handleClick}>
          {text_button}
        </button>
      </form>
    </>
  );
}

export default SignIn;