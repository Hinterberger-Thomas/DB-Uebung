import axios from "axios"
import React from 'react'

//export const getData =  (id: number) =>  axios.get('http://127.0.0.1:8000/find/' + id);

export const inserData =  (data: Object) =>  axios.post('http://127.0.0.1:8000/insData',data)

export function getData (id: Object)
{
    return axios.get('http://127.0.0.1:8000/find/' + id)
}