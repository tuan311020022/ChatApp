# External library
from flask import Flask, jsonify
from flask_jwt_extended import JWTManager
from blueprints.users.route import user


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "12345678"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    jwt = JWTManager(app)

    app.register_blueprint(user)

    @app.route('/')
    def hello_world():
        return jsonify({'hello' : "hello"})


    return app
