import React, {useState} from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login=(event)=> {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <React.Fragment>
      <form method="POST" onSubmit = {() => login()}>

        <label htmlFor="email" style={{display:"block"}}>Email</label>
        <input type="email" placeholder="Email" onChange={(event) => setEmail(event)}/><br/>

        <label htmlFor="password" style={{display:"block"}}>Password</label>
        <input type="password" placeholder="Password" onChange={() => setPassword()}/><br/>

        <input type="submit" value="Log in"/>

      </form>
    </React.Fragment>
  );
}

export default Login;