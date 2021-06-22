import React, { MouseEventHandler, useRef } from 'react'
import { getData } from "../api"

function Login() {
    const nameRef = useRef("");
    const passwordRef = useRef("");

    interface GetDataInter{
        name: string,
        password: string
    }

    const apiGetData = (): MouseEventHandler<HTMLButtonElement> | undefined => {
        type type = GetDataInter{};
        getData({ password: get, email: nameRef })
        return undefined;
    }

    return (
        <div>
            <h4>Name</h4>
            <input ref={nameRef} placeholder="name"></input>
            <h4>Password</h4>
            <input ref={passwordRef} placeholder="password"></input>
            <br />
            <button onClick={apiGetData()}>safe</button>
        </div>
    )
}

export default Login
