import NavigationHeader from '../../Components/header/NavigationHeader';
import Account from '../../Components/account/Account';
import EditUserInfo from '../edit-user-info/EditUserInfo';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserName } from '../../Redux/redux';

function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem('userName');
    if (userNameFromStorage) {
      dispatch(saveUserName(userNameFromStorage));
    }
  }, []);

  const [hideForm, setHideForm] = useState(false);
  const userName = useSelector((state) => state.user.userName);
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');

  return (
    <>
      <NavigationHeader name={userName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br /> {userName}!
          </h1>
          <button
            className="edit-button"
            onClick={() => setHideForm(!hideForm)}
          >
            Edit Name
          </button>
          <EditUserInfo
            form_title="Edit info"
            save_button="save"
            cancel_button="cancel"
            display={hideForm}
            userNameProps={userName}
            firstName={firstName}
            lastName={lastName}
          />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
      </main>
    </>
  );
}

export default User;