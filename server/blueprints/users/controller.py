from blueprints.users.models import UserModel
from flask import request,jsonify
from app.db import db
import hmac
from flask_jwt_extended import create_access_token , create_refresh_token ,set_access_cookies , set_refresh_cookies

def create_user():
    try:
        data = request.get_json()
        user = UserModel(data['user_name'] , data['password'])
        user.save_to_db()
        return user.user_id
    except Exception as ex:
        db.session.rollback()
        raise ex
    finally:
        db.session.close()

def login():
    try:
        data = request.get_json()
        user = UserModel.find_by_user_name(data['user_name'])
        if user is None :
            raise ValueError("The user is None")


        if hmac.compare_digest(user.password , data["password"]):
            access_token = create_access_token(identity=data['user_name'])
            refresh_token = create_refresh_token(identity=data['user_name'])
            resp = {
                'message' : 'login success',
                'user_id' : user.user_id,
                'access_token' : access_token,
                'refresh_token' : refresh_token
            }
            set_access_cookies(resp,access_token)
            set_refresh_cookies(resp,refresh_token)
            return resp
    except Exception as ex:
        db.session.rollback()
        raise ex

    finally:
        db.session.close()
    

            
            
        


    
    

        