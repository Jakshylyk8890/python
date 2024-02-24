
import json
import requests
headers = {
    "Authorization":"Bearer ya29.a0AVvZVsrLz31tS6u_koHNjOHObcB0USWdFS9r9LO0JhjLAsZ6rhphGX05PS_RxLM0kOhErfFlBZIhGcSOAWEIbY1ACMOoYCetxOHM86lF0qBvu3Ruqdcm-PQVkSCYF9OFQyQONG7nxzA3bf8RsIphS5obKE1fvF0aCgYKAbwSARASFQGbdwaIzDPyBAWaS7IwM_wmmrcQtQ0166"
}
 
para = {
    "name":"file.txt",
    "parents":[""]
}
 
files = {
    'data':('metadata',json.dumps(para),'application/json;charset=UTF-8'),
    'file':open('./file.txt','rb')
}
 
r = requests.post("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
    headers=headers,
    files=files
)