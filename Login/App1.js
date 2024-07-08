import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App1.css";
import { auth } from "./firebase-config";


function App1() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App1" id="Login" >
      <div className="boxapp-container">
  <div>
    
    <div className="box1app">
    <h3> Register User </h3>
    <div style={{ textAlign: 'center' }}>
      <input
        placeholder="Email..."
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
        style={{ display: 'block', margin: '0 auto' }}
      />
      <br />
      <input
      type="password"
        placeholder="Password..."
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
        
        style={{ display: 'block', margin: '0 auto' }}
      />
    
    </div>
    <button onClick={register}> Register</button>
  </div>
  </div>
  

  <div>
    <div className="box2app">
    <h3> Login </h3>
    <div style={{ textAlign: 'center' }}>
      <input
        placeholder="Email..."
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
        style={{ display: 'block', margin: '0 auto' }}
      />
      <br />
      <input
      type="password"
        placeholder="Password..."
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
        style={{ display: 'block', margin: '0 auto' }}
      />
    </div>
    <button onClick={login}> Login</button>
  </div>
  </div>
  
  
  

<div className="box3app">

  <div className="user-logged-in">
    <h4> User Logged In: </h4>
    {user?.email}
  

  <button onClick={logout} className="sign-out-buttonapp"> Sign Out </button>
  
</div>
</div>
</div>
</div>


  );
}

export default App1;
