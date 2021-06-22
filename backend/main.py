import pymongo
from db import mongoDB
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

origins = [
    "https://localhost:8000",
    "http://localhost",
    "http://localhost:8080",
]


class Item(BaseModel):
    fname: str
    lname: str
    password: str
    email: str


app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    print("hehe")
    return {"fname": "T",
            "lname": "H",
            "imp": {
                "password": "1234",
                "email": "h@gmail.com"
            }

            }


@app.post("/insData")
async def ins_data(data):
    mongoDB.insert_data(data)
    return True
