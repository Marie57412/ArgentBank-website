
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

export async function ProfilUser(token) {
  try {
    console.log('Token:', token);
    const response = await fetch(ProfileUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Réponse non valide du serveur');
    }

    return response.json();
  } catch (error) {
    throw new Error('Erreur lors de la connexion : ' + error.message);
  }
}
// fonction uptade le profil

export async function UpdateUserProfile(updatedUserData) {
  try {
    const token = localStorage.getItem('userToken'); 
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUserData),
    });

    if (!response.ok) {
      throw new Error('Réponse non valide du serveur');
    }

    return response.json();
  } catch (error) {
    throw new Error('Erreur lors de la connexion : ' + error.message);
  }
}

//fonction new user

export async function CreateUserProfile(newUserData) {
  try { 
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(newUserData),
    });

    if (!response.ok) {
      throw new Error('Réponse non valide du serveur');
    }

    return response.json();
  } catch (error) {
    throw new Error('Erreur lors de la connexion : ' + error.message);
  }
}