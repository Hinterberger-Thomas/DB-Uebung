import pymongo
from db import mongoDB
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "https://localhost:8000",
    "http://localhost",
    "http://localhost:8080",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins = "*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    print("hehe")
    return {"fname": "T",
            "lname": "H",
            "imp":{
                "password" :"1234",
                "email":"h@gmail.com"
            }

            }
@app.post("/api/insData")
async def ins_data(data):
    mongoDB.insert_data(data)
    

