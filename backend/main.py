import pymongo
from db import dbConn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

origins = [
    "https://localhost:8000",
    "http://localhost",
    "http://localhost:8080",
]


class insertDataModel(BaseModel):
    fname: str
    lname: str
    password: str
    email: str

class getDataModel(BaseModel):
    password: str
    email: str

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/find/{id}")
async def read_root(item_id: getDataModel):
    db.find_one(item_id)



@app.post("/insData")
async def ins_data(item: insertDataModel):
    db.insert_one(item)


