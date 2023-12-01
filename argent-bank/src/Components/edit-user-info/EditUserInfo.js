import { useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { putChangeUserName } from '../../Api/Api';
import { saveUserName } from '../../Redux/redux';
function EditUserInfo({
  form_title, 
  save_button, 
  cancel_button, 
  display,
  firstName,
  lastName,
}) {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const [userName, setUserName] = useState(localStorage.getItem('userName')); 
  const [tempUserName, setTempUserName] = useState(userName); 
  const token = localStorage.getItem('token'); 
  const inputRef = useRef(null);

  
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        handleClickSave(); 
      }
    }

    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleKeyDown); 
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleKeyDown); 
      }
    };
  }, [tempUserName]); 

  
  const handleChangeUserName = (e) => {
    setTempUserName(e.target.value); 
  };

  
  const handleClickSave = () => {
    putChangeUserName(token, tempUserName); 
    dispatch(saveUserName(tempUserName)); 
    localStorage.setItem('userName', tempUserName); 
    setUserName(tempUserName); 
    navigate(`/user/${tempUserName}`);
  };

  
  const handleClickCancel = () => {
    setTempUserName(userName); 
  };

  
  return (
    <>
      <div className={display ? 'form-user' : 'form-user__hide'}>
        <h3>{form_title}</h3>
        <form>
          <div>
            <label htmlFor="user_name">User name:</label>
            <input
              ref={inputRef}
              type="text"
              id="user_name"
              name="user_name"
              placeholder={tempUserName} 
              onChange={handleChangeUserName} 
            />
          </div>
          <div>
            <label htmlFor="first_name">First name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder={firstName} 
              disabled={true} 
            />
          </div>
          <div>
            <label htmlFor="last_name">Last name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder={lastName}
              disabled={true} 
            />
          </div>
          <div className="buttons">
            <button onClick={handleClickSave}>{save_button}</button>
            <button onClick={handleClickCancel}>{cancel_button}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserInfo;