import User from "../Components/Users/User";


const LoginUrl = 'http://localhost:3001/api/v1/user/login';


export async function loginUser(userData) {
  try {
    const response = await fetch(LoginUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Réponse non valide du serveur');
    }

    return response.json();
  } catch (error) {
    throw new Error('Erreur lors de la connexion : ' + error.message);
  }
}

const ProfileUrl = 'http://localhost:3001/api/v1/user/profile';


export async function ProfilUser(userData) {
  try {
    const response = await fetch(ProfileUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Réponse non valide du serveur');
    }

    return response.json();
  } catch (error) {
    throw new Error('Erreur lors de la connexion : ' + error.message);
  }
}