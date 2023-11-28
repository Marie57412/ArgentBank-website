import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { putChangeUserName } from '../../Api/Api';
import { saveUserName } from '../../Redux/redux';
function EditUserInfo({
  form_title, // Titre du formulaire
  save_button, // Libellé du bouton de sauvegarde
  cancel_button, // Libellé du bouton d'annulation
  display, // afficher ou masquer le formulaire
  firstName, // Prénom de l'utilisateur
  lastName, // Nom de famille de l'utilisateur
}) {
  const dispatch = useDispatch(); // Initialisation de la fonction dispatch pour envoyer des actions Redux
  const navigate = useNavigate(); // Initialisation du hook de navigation
  const [userName, setUserName] = useState(localStorage.getItem('userName')); // État pour stocker le nom d'utilisateur
  const [tempUserName, setTempUserName] = useState(userName); // État temporaire pour stocker le nom d'utilisateur modifié avant sauvegarde
  const token = localStorage.getItem('token'); // Récupération du token d'authentification depuis le stockage local
  const inputRef = useRef(null); // Référence à l'élément de formulaire pour la gestion des événements

  // Effet pour gérer l'événement de pression de la touche Enter
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        handleClickSave(); // Appelle la fonction handleClickSave si la touche pressée est Enter
      }
    }

    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleKeyDown); // Ajoute un gestionnaire d'événements pour la touche Enter
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleKeyDown); // Retire le gestionnaire d'événements
      }
    };
  }, [tempUserName]); // Dépendance à surveiller pour cet effet

  // Fonction pour gérer le changement du nom d'utilisateur dans l'état temporaire
  const handleChangeUserName = (e) => {
    setTempUserName(e.target.value); // Met à jour le nom d'utilisateur temporaire lorsqu'il y a un changement dans le champ de saisie
  };

  // Fonction pour gérer le clic sur le bouton de sauvegarde
  const handleClickSave = () => {
    putChangeUserName(token, tempUserName); // Appelle la fonction pour modifier le nom d'utilisateur via l'API
    dispatch(saveUserName(tempUserName)); // Envoie l'action Redux pour sauvegarder le nom d'utilisateur dans le store
    localStorage.setItem('userName', tempUserName); // Met à jour le nom d'utilisateur dans le stockage local
    setUserName(tempUserName); // Met à jour le nom d'utilisateur dans l'état
    navigate(`/user/${tempUserName}`); // Redirige vers la page utilisateur avec le nouveau nom d'utilisateur
  };

  // Fonction pour gérer le clic sur le bouton d'annulation
  const handleClickCancel = () => {
    setTempUserName(userName); // Réinitialise le nom d'utilisateur temporaire avec la valeur actuelle
  };

  // Rendu du composant du formulaire de modification des informations utilisateur
  return (
    <>
      <div className={display ? 'form-user' : 'form-user__hide'}>
        <h3>{form_title}</h3>
        <form>
          {/* Champ pour le nom d'utilisateur */}
          <div>
            <label htmlFor="user_name">User name:</label>
            <input
              ref={inputRef} // Référence à l'élément input pour la gestion de l'événement de touche
              type="text"
              id="user_name"
              name="user_name"
              placeholder={tempUserName} // Affiche le nom d'utilisateur temporaire dans le champ
              onChange={handleChangeUserName} // Appelle la fonction lorsqu'il y a un changement dans le champ
            />
          </div>
          {/* Champs pour le prénom et le nom de famille (désactivés pour l'édition) */}
          <div>
            <label htmlFor="first_name">First name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder={firstName} // Affiche le prénom dans le champ (désactivé pour l'édition)
              disabled={true} // Désactive la modification du champ
            />
          </div>
          <div>
            <label htmlFor="last_name">Last name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder={lastName} // Affiche le nom de famille dans le champ (désactivé pour l'édition)
              disabled={true} // Désactive la modification du champ
            />
          </div>
          {/* Boutons de sauvegarde et d'annulation */}
          <div className="buttons">
            <button onClick={handleClickSave}>{save_button}</button>
            <button onClick={handleClickCancel}>{cancel_button}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserInfo;