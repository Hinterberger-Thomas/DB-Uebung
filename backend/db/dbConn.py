import pymongo


url = "mongodb://localhost:27017/"

myclient = pymongo.MongoClient(url)
mydb = myclient["mydatabase"]
mycol = mydb['data']


def insert_one(data):
    x = mycol.insert_one(data)


def find_one(data):
    result = mycol._insert_one({"email": data.email,
                                "password": data.password})
    return result