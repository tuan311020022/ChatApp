from blueprints.users import controller as user_ctrl
from flask import Blueprint,jsonify
# import HTTPStatus
from http import HTTPStatus

user:Blueprint = Blueprint('user',__name__,url_prefix='/api/user')

@user.route('/register', methods = ['POST'])
def register():
    try:
        result = user_ctrl.create_user()
        content = {
            "message" : "Register Success",
            "user_id" : result
        }
        status = HTTPStatus.OK
    except Exception as ex:
        content = {
            "error" : str(ex)
        }
        status = HTTPStatus.INTERNAL_SERVER_ERROR
    return jsonify(content),status
 
        
