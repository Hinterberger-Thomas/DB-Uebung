import axios, { AxiosResponse } from 'axios';
import { Interface } from 'readline';
//export const getData =  (id: number) =>  axios.get('http://127.0.0.1:8000/find/' + id);

export const inserData = (data: Object) => axios.post('http://127.0.0.1:8000/insData', data)

const responseBody = (response: AxiosResponse) => response.data;

export async function getData(email: string | undefined, password: string | undefined): Promise<any> {
    let login = false;
    let res = await axios.get<Boolean>('http://127.0.0.1:8000/find/' + email + '/' + password).then(responseBody)
        .then(response => {
            login = response[0].erf;  
        })
    return login;
}

export async function register(email: string | undefined, password: string | undefined): Promise<any> {
    if (!email && !password) { return false }
    let regEr = false;
    let res = await axios.post<Boolean>('http://127.0.0.1:8000/insData/', { "email": email, "password": password }).then(responseBody)
        .then(response => {
            regEr = response[0].erf;
        })
    return regEr;
}

export async function addDic(email:string|undefined, text:string|undefined): Promise<any> {
    let data;
    let res = await axios.post<Boolean>('http://127.0.0.1:8000/insDic/', { "email": email, "text": text }).then(responseBody)
    .then(response => {
        data = response[0].erf;
    })
    return data
}

export interface Diary {
    date: Date;
    text: string;
}

export async function getDic(email: string): Promise<any> {
    let data;
    let res = await axios.get<Diary[]>('http://127.0.0.1:8000/findAll/'+email).then(responseBody)
    .then(response => {
        data = response[0].erf;
    })
    return data
}