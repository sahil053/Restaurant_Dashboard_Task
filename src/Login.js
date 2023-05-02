import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import Airtable from 'airtable';
import {useNavigate} from 'react-router-dom';

const base = new Airtable({apiKey: "keyfXgn8PL6pB3x32"}).base("appjWdL7YgpxIxCKA");

function Login() {
    console.log('heh')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useNavigate();
  const handleUsernameChange = (event) =>{
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    base('credenitals').select({
      filterByFormula: `username = '${username}'`,
    }).firstPage((err, records) => {
      if(err) {
        console.error(err);
        return;
      }

      if(records.length === 0){
        console.log('User not found');
        return;
      }

      const user = records[0].fields;

      if(user.password !== password){
        console.log('Invalid password');
        alert("incorrect password")
        return;
      }
      else{
        alert("successfull");
        router('/homepage')
        console.log(username, password);
      }  
    });
  };
  
  return ( 
    <>
       <div className="grid">
         <div className="order__left centered">
            <div className="form">
                  
               <h4 style={{fontWeight: "bolder"}}>
               Search the Restaurant at your nearest!
               </h4>
              <form action={""} id='login_form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Username" autoComplete="on"   
                value={username} onChange={handleUsernameChange}
                />
                <label htmlFor="password">Password:</label>
                 <input type="password" id="password" name="password" placeholder="Password" autoComplete="on" required={true} value={password} onChange={handlePasswordChange}
                />

               <button id="btn" type="submit" className="login__button">Login</button>
              </form>
    
            </div>
         </div>
         
         <div className="order_right centered no_overflow">
            <img className="img" src="https://image.lexica.art/full_jpg/84474473-8488-402f-8f69-3eebb108485e" alt="picture" />
         </div>

         
      </div>
      

    </>
  );
}



export default Login;