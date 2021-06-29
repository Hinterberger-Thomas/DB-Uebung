import pymongo
import time

url = "mongodb://localhost:27017/"

myclient = pymongo.MongoClient(url)
mydb = myclient["mydatabase"]
mycol = mydb['data']
mycols = mydb['datas']


def insert_one(data):
    result = mycol.insert_one({"_id": data.email,
                               "password": data.password,
                               })


def find_one(email: str):
    x = mycol.find_one(email)
    return x


def find_list(email: str):
    return mycol.find_one(email)


def insert_one_dic(data):
    data = []
    result = mycols.insert_one({"email": data.email,
                               "date": time.asctime(
                                   time.localtime(time.time())),
                                "text": data.text})
    x = mycols.find({"email": data.email})
    for result in x:
        data.append(result['text'] + "  "+result['date'])
    return data


def find_one_idc(email: str):
    data = []
    x = mycols.find({"email": email})
    for result in x:
        data.append(result['text'] + "  "+result['date'])
    return data


def insert_dic_db(email,text):
    result = mycols.insert_one({"email": email,
                                "date": time.asctime(
                                    time.localtime(time.time())),
                                "text": text,
                                })
    data = []
    x = mycols.find({"email": email})
    for result in x:
        data.append(result['text'] + "  "+result['date'])
    return data
