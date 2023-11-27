// API base URL
const baseUrl = 'http://localhost:3001/api/v1/';

// POST - Accès au token via l'email et le mot de passe
async function postAccessToToken(email, password) {
  let user = {
    email: email,
    password: password,
  };
  // Envoie une requête POST pour obtenir le token d'authentification
  let response = await fetch(`${baseUrl}user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
  return response;
}

// POST - Récupération du profil utilisateur avec le token
export async function postGetProfile(token) {
  // Envoie une requête POST pour récupérer les détails du profil utilisateur
  let response = await fetch(`${baseUrl}user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

  return response;
}

// GET - Obtention du token d'authentification
export async function getToken(email, password) {
  const response = await postAccessToToken(email, password);
  const responseBody = await response.json();
  const token = responseBody.body.token;
  return token;
}

// GET - Obtention du nom d'utilisateur avec le token
export async function getUserName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const userName = responseBody.body.userName;
  return userName;
}

// GET - Obtention du prénom avec le token
export async function getFirstName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const firstName = responseBody.body.firstName;
  return firstName;
}

// GET - Obtention du nom de famille avec le token
export async function getLastName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const lastName = responseBody.body.lastName;
  return lastName;
}

// PUT - Changement du nom d'utilisateur avec le token
export async function putChangeUserName(token, newUserName) {
  let userName = {
    userName: newUserName,
  };
  // Envoie une requête PUT pour modifier le nom d'utilisateur
  let response = await fetch(`${baseUrl}user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(userName),
  });
  return response;
}