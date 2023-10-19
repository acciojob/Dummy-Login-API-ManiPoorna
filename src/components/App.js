import React, { useState } from 'react'

const App = () => {
  const users = [
    { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
    { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
    { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
  ]
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [Uerror, setUError] = useState(false)
  const [errUMsg, setUErrMsg] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [Perror, setPError] = useState(false)

  function checkUser(e) {
    e.preventDefault();
    // console.log(email, password)
    if (email !== "" && password !== "") {
      const checkEmailExists = users.find(user => user.email === email);
      if (checkEmailExists) {
        if (password !== checkEmailExists.password) {
          setPError(true)
          setUErrMsg(false)
          setErrMsg("Password Incorrect")
        }
        else {
          setTimeout(() => {
            console.log(checkEmailExists)
          }, 3000);
          setPError(false)
          setUErrMsg(false)
        }
      }
      else {
        setUError(true)
        setPError(false)
        setUErrMsg("User not found")
      }
    }
  }

  return (
    <div>
      <form onSubmit={(e) => checkUser(e)}>
        <input id='input-email' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
        <input id='input-password' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
        <p id='password-error' style={{ color: "red" }}>{ Perror? errMsg: ""}</p>
        <button type='submit' id='submit-form-btn' >Submit</button>
         <p id="user-error" style={{ color: "red" }}>{Uerror ? errUMsg  : ""}</p>

      </form>
    </div>
  )
}

export default App