import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const history=useHistory();
    const location=useLocation();
    const {from}=location.state||{from:{pathname:"/"}};

   
   
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
    const handleGoogleSignIn =()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
   const {displayName,email}= result.user;
   const signedInUser={name:displayName,email}
   setLoggedInUser(signedInUser);
   history.replace(from)
   
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div className="body">
            
            <h2 className="h2">Login Page</h2><br/>    
    <div class="login">    
    <form id="login" method="get" action="login.php">    
        <label><b>User Name     
        </b>    
        </label>    
        <input  type="text" name="Uname" id="Uname" placeholder="Username"/>  
        <br/>   
        <label><b>Password     
        </b>    
        </label>    
        <input type="Password" name="Pass" id="Pass" placeholder="Password"/>    
        <br/>    
        <input  className="button-add" onClick={handleGoogleSignIn} type="button" name="log" id="log" value="Sign into Google"/>     
        <br/>   
        <input type="checkbox" id="check"/>  
        <span>Remember me</span>    
        <br/>    
        <p style={{marginRight:"100px",color:"white"}}> <a  className="a" href="#"> Forgot Password </a></p>    
    </form>     
</div>    
        </div>
        // <img src="https://i.ibb.co/4mp60ft/facebook-1.png" alt="facebook-1" border="0"></img>
    );
};

export default Login;

