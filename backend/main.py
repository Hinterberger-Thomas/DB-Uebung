import pymongo
import dbConn as db
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import ORJSONResponse

app = FastAPI()

origins = [
    "https://localhost:8000",
    "http://localhost",
    "http://localhost:8080",
]


class insertDataModel(BaseModel):
    email: str
    password: str


class getDataModel(BaseModel):
    password: str
    email: str


class insData(BaseModel):
    email: str
    text: str


app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/find/{email}/{password}",  response_class=ORJSONResponse)
async def read_root(email: str, password: str):
    user = db.find_one(email)
    if user != None:
        print("hey")
        return [{"erf": True}]
    else:
        return [{"erf": False}]


@app.post("/insData")
async def ins_data(item: insertDataModel,  response_class=ORJSONResponse):
    try:
        db.insert_one(item)
    except pymongo.errors.DuplicateKeyError:
        return [{"erf": False}]
    return [{"erf": True}]


@app.get("/find/{email}",  response_class=ORJSONResponse)
async def read_root(email: str):
    return db.update(email)


@app.post("/insDic")
async def ins_data(item: insData,  response_class=ORJSONResponse):
    return [{"erf": db.insert_dic_db(item.email,item.text)}]


@app.get("/findAll/{email}",  response_class=ORJSONResponse)
async def read_root(email: str):
    return [{"erf": db.find_one_idc(email)}]
