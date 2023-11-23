import { configureStore, createSlice } from '@reduxjs/toolkit';

// Création d'une tranche (slice) pour gérer les informations utilisateur dans Redux
const userInfosSlice = createSlice({
  name: 'user', // Nom de la tranche (slice)
  initialState: {
    token: null, // Token d'authentification de l'utilisateur
    userName: localStorage.getItem('userName'), // Nom d'utilisateur récupéré du stockage local
    firstName: localStorage.getItem('firstName'), // Prénom récupéré du stockage local
    lastName: localStorage.getItem('lastName'), // Nom de famille récupéré du stockage local
  },
  reducers: {
    // Action pour sauvegarder le token dans l'état Redux
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    // Action pour sauvegarder le nom d'utilisateur dans l'état Redux
    saveUserName: (state, action) => {
      state.userName = action.payload;
    },
    // Action pour sauvegarder le prénom dans l'état Redux
    saveFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    // Action pour sauvegarder le nom de famille dans l'état Redux
    saveLastName: (state, action) => {
      state.lastName = action.payload;
    },
    // Action pour réinitialiser les informations utilisateur dans l'état Redux
    resetUser: (state) => {
      return {
        token: null,
        userName: null,
        firstName: null,
        lastName: null,
      };
    },
  },
});

// Export des actions créées pour être utilisées dans d'autres parties du code
export const {
  saveToken,
  saveUserName,
  saveFirstName,
  saveLastName,
  resetUser,
} = userInfosSlice.actions;

// Configuration du store Redux en utilisant la tranche (slice) créée précédemment
export const store = configureStore({
  reducer: {
    user: userInfosSlice.reducer, // Réducteur pour gérer les informations utilisateur
  },
});