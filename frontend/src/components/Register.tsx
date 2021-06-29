import React, { MouseEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from "../api"
import { setEmail } from '../features/dataSlice';
import "../Bootstrap.css"


function Insert() {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const history = useHistory();
    const dispatch = useDispatch()
    
    
    const handleMouseEvent = async (e: MouseEvent<HTMLButtonElement>) => {
        let login;

        login = await register(nameRef.current?.value, passwordRef.current?.value);

        if (login) {
            dispatch(setEmail(nameRef.current?.value));
            history.push("/overview")
        }
        return undefined;
    }

    return (
        <div>
            <h4 className = "display-4">Name</h4>
            <input className = "form-control" ref={nameRef} placeholder="name"></input>
            <h4 className = "display-4">Password</h4>
            <input className = "form-control" type = "password" ref={passwordRef} placeholder="password"></input>
            <br />
            <button className = "btn btn-primary" onClick={handleMouseEvent}>safe</button>
        </div>
    )
}

export default Insert
