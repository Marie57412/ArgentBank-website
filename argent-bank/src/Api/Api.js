import User from "../Components/Users/User";




const BASE_URL = 'http://localhost:3001/api/v1/user/login';


export async function loginUser(userData) {
  try {
    const response = await fetch(BASE_URL, {
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