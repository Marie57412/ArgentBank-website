  import NavigationHeader from '../../Components/header/NavigationHeader'; // Importe le composant de l'en-tête de navigation
  import Account from '../../Components/account/Account'; // Importe le composant de compte
  import EditUserInfo from '../edit-user-info/EditUserInfo'; // Importe le composant pour éditer les informations utilisateur
  import { useEffect, useState } from 'react'; // Importe les hooks useEffect et useState de React
  import { useDispatch, useSelector } from 'react-redux'; // Importe les hooks useDispatch et useSelector de React Redux
  import { saveUserName } from '../../Redux/redux'; // Importe l'action saveUserName du Redux
  
  function User() {
    const dispatch = useDispatch(); // Initialise useDispatch pour envoyer des actions au store Redux
  
    // Utilise useEffect pour charger le nom d'utilisateur depuis le stockage local lors du chargement initial
    useEffect(() => {
      const userNameFromStorage = localStorage.getItem('userName'); // Récupère le nom d'utilisateur depuis le stockage local
      if (userNameFromStorage) {
        dispatch(saveUserName(userNameFromStorage)); // Envoie le nom d'utilisateur récupéré au store Redux
      }
    }, []);
  
    const [hideForm, setHideForm] = useState(false); // Initialise un état pour masquer ou afficher un formulaire
    const userName = useSelector((state) => state.user.userName); // Récupère le nom d'utilisateur depuis le store Redux
    const firstName = localStorage.getItem('firstName'); // Récupère le prénom depuis le stockage local
    const lastName = localStorage.getItem('lastName'); // Récupère le nom depuis le stockage local
  
  

  return (
    <>
      <NavigationHeader name={userName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br /> {userName}!
          </h1>
          <button
            className="edit-button"
            onClick={() => setHideForm(!hideForm)}
          >
            Edit Name
          </button>
          <EditUserInfo
            form_title="Edit info"
            save_button="save"
            cancel_button="cancel"
            display={hideForm}
            userNameProps={userName}
            firstName={firstName}
            lastName={lastName}
          />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
      </main>
    </>
  );
}

export default User;