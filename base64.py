import cv2
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import base64




cred = credentials.Certificate('mywebsite-7ab79-firebase-adminsdk-3nfbm-114f420bdb.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
capture = cv2.VideoCapture(0) 
while True:
  ret, frame = capture.read()
  cv2.imshow('Output', frame)
  image_code = str(base64.b64encode(cv2.imencode('.jpg', frame)[1]).decode())
  docRefCamera = db.collection(u'shopminders').document(u'8Coplu8dEzyyKmIQnjl7')
  docRefCamera.set({
    u'pic': image_code
  })
  k = cv2.waitKey(10) &0xFF
  if k == 27:
     break
capture.release()
cv2.destroyAllWindows()


