import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ProfilUser, UpdateUserProfile, CreateUserProfile } from "../../Api/Api";
import { setToken } from "../../Redux/Signintoken";


function User() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newFirstName, setNewFirstName] = useState(""); 
  const [newLastName, setNewLastName] = useState(""); 
  const storedToken = localStorage.getItem('userToken');
  const token = storedToken;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await ProfilUser(token);
        localStorage.setItem('userToken', result.token);
        setUserName(result.body.userName);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de profil :', error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [dispatch, token]);

  const handleEditProfile = async () => {
    try {
      const updatedUserData = {
        userName: newUserName,
        firstName: newFirstName, 
        lastName: newLastName,   
      };

      const updatedResult = await UpdateUserProfile(updatedUserData, token);
      localStorage.setItem('userToken', updatedResult.token);
      dispatch(setToken(updatedResult.token));
      setUserName(updatedResult.body.userName);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };

  const handleCreateProfile = async () => {
    try {
      const newUserData = {
        userName: "NomUtilisateur",
      };

      const createdResult = await CreateUserProfile(newUserData, token);
      setUserName(createdResult.body.userName);
    } catch (error) {
      console.error('Erreur lors de la création du profil :', error);
    }
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


    return(
      <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}!
        </h1>
        <button className="edit-button" onClick={toggleModal}>
          Edit Name
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Edit Profile</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={newFirstName}
                  onChange={(e) => setNewFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                />
              </div>
              <div className="button-group">
                <button type="button" onClick={toggleModal}>
                  Cancel
                </button>
                <button type="button" onClick={handleEditProfile}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    )
}

export default User