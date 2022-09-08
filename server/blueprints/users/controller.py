from blueprints.users.models import UserModel
from flask import request
from app.db import db

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
    
    

        