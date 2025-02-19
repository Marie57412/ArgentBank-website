
const baseUrl = 'http://localhost:3001/api/v1/';


async function postAccessToToken(email, password) {
  let user = {
    email: email,
    password: password,
  };
  
  let response = await fetch(`${baseUrl}user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
  return response;
}


export async function postGetProfile(token) {
  
  let response = await fetch(`${baseUrl}user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

  return response;
}


export async function getToken(email, password) {
  const response = await postAccessToToken(email, password);
  const responseBody = await response.json();
  const token = responseBody.body.token;
  return token;
}


export async function getUserName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const userName = responseBody.body.userName;
  return userName;
}


export async function getFirstName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const firstName = responseBody.body.firstName;
  return firstName;
}

export async function getLastName(token) {
  const response = await postGetProfile(token);
  const responseBody = await response.json();
  const lastName = responseBody.body.lastName;
  return lastName;
}


export async function putChangeUserName(token, newUserName) {
  let userName = {
    userName: newUserName,
  };
 
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