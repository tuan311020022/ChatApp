from app.db import db
class UserModel(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer , primary_key = True)
    user_name = db.Column(db.String(256))
    password = db.Column(db.String(256))

    def __init__(self,user_name,password):
        # self.user_id = user_id
        self.user_name = user_name
        self.password = password

    @classmethod
    def find_by_user_name(cls , user_name):
        return cls.query.filter_by(user_name = user_name).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
