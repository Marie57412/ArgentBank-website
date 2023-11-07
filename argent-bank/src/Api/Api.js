const userData = {
    email: "users.email",
    password: "users.password",
  };
  
  fetch('http://localhost:3001/api/v1/user/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Réponse non valide du serveur');
      }
      return response.json();
    })
    .then((result) => {
      console.log('Réponse de l\'API de connexion :', result);
      
    })
    .catch((error) => {
      console.error('Erreur lors de la connexion :', error);
    });