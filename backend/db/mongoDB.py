import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db_data = myclient['db_name']

def insert_data(data):
    insertion = db_data['testo']
    mydic_data = {
        'fname':data.fname,
        'lname': data.lname,
        'password': data.password,
        'email': data.email
    }
    insertion.insert_one(mydic_data)
    
