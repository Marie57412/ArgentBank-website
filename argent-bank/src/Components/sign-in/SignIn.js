import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import {
  getFirstName,
  getLastName,
  getToken,
  getUserName,
} from '../../Api/Api'; 
import signInError from '../errors/signInError';


import {
  saveFirstName,
  saveLastName,
  saveToken,
  saveUserName,
} from '../../Redux/redux';


function SignIn({
  icon, 
  alt, 
  title, 
  form_account, 
  form_password, 
  tick_text, 
  text_button, 
}) {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  useEffect(() => {
    localStorage.clear(); 
  }, []);

  
  async function handleClick(e) {
    e.preventDefault(); 
    try {
      
      const token = await getToken(email, password);
      const userName = await getUserName(token);
      const firstName = await getFirstName(token);
      const lastName = await getLastName(token);

    
      dispatch(saveToken(token));
      dispatch(saveUserName(userName));
      dispatch(saveFirstName(firstName));
      dispatch(saveLastName(lastName));


      localStorage.setItem('token', token);
      localStorage.setItem('userName', userName);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);

     
      navigate(`/user/${userName}`);
    } catch (error) {
  
      signInError();
      console.log('Email ou mot de passe incorrect', error);
    }
  }

  
  return (
    <>
    
      <i className="fa fa-email-circle sign-in-icon">
        <img src={icon} alt={alt} />
      </i>
 
      <h1>{title}</h1>
      
      <form>
       
        <div className="input-wrapper">
          <label htmlFor="emailname">{form_account}</label>
          <input
            type="text"
            id="emailname"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
       
        <div className="input-wrapper">
          <label htmlFor="password">{form_password}</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">{tick_text}</label>
        </div>
        <button type="submit" className="sign-in-button" onClick={handleClick}>
          {text_button}
        </button>
      </form>
    </>
  );
}

export default SignIn;