import React, { MouseEvent, MouseEventHandler, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getData } from "../api"
import { setEmail } from '../features/dataSlice';
import "../Bootstrap.css"

function Login() {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const history = useHistory();
    const dispatch = useDispatch()
    const handleMouseEvent = async (e: MouseEvent<HTMLButtonElement>) => {
        let login;


        login = await getData(nameRef.current?.value, passwordRef.current?.value);

        if (login) {

            dispatch(setEmail(nameRef.current?.value));
            history.push("/overview");
        }
        return undefined;
    }

    return (
        <div>
            <h4 className="display-4">Name</h4>
            <input className="form-control" ref={nameRef} placeholder="name"></input>
            <h4 className="display-4">Password</h4>
            <input className="form-control" type="password" ref={passwordRef} placeholder="password"></input>
            <br />
            <button className="btn btn-primary" onClick={handleMouseEvent}>safe</button>
            <Link className="link-primary" to="/register">Register</Link>
            <div className ="px-4 pb-2 pt-4">
                <button className ="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
            </div>
        </div>
    )
}

export default Login
