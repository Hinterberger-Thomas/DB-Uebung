import React, { useState, MouseEvent, useRef, useEffect } from 'react'
import { addDic, getDic, Diary } from '../api';
import { useSelector, useDispatch } from 'react-redux'
import  "../Bootstrap.css"

function Overview() {

    const email: any = useSelector<any>((state) => state.email.value)
    const text = useRef<HTMLInputElement | null>(null);
    const [diar, setDiar] = useState<string[]>([]);
    const listItems = diar.map((item) => <li className = "list-group-item">{item}</li>);


    const handleMouseEvent = async (e: MouseEvent<HTMLButtonElement>) => {
        const res = await addDic(email, text.current?.value);
        setDiar(res)
    }


    useEffect(() => {
        const initList = async () => {
            const res = await getDic(email);
            try{
            res.map((item: any) => setDiar(diar => [...diar, item]))
            }catch(errror){}
        };
        initList();
    }, [])

    return (
        <div>
            <h5></h5>
            <ul className = "list-group">{listItems}</ul>
            <input className = "form-control" ref={text}></input>
            <button className = "btn btn-primary" onClick={handleMouseEvent}> add</button>
        </div>

    )
}

export default Overview
