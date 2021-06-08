import {React, useState} from "react";

function InsertM() {
  const inupRef = React.useRef();
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()


  return (
    <div>
        fname:
        <input onChange={event => setFname(event.target.value)}  type="text"></input>
        lname:
        <input onChange={event => setLname(event.target.value)} type="text"></input>
        password:
        <input onChange={event => setPassword(event.target.value)} type="text"></input>
        email:
        <input onChange={event => setEmail(event.target.value)} type="text"></input>
        <button value = "sumbit"onClick = "">submit</button>

    </div>
  );
}

export default InsertM;
