import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

function Header() {
  const {user} = useContext(LoginContext);
  let userInfo = null;
  if(user){
      userInfo =  <p>Hello. {user.name} - {user.email}</p>
  }
  return (
    <header className="header">
      <h1>환영합니다!</h1>
      {userInfo}
    </header>
  );
}

export default Header;
