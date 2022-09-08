# Internal library
from app.app import create_app
from app.db import db

app = create_app()


if __name__ == '__main__':
    db.init_app(app)
    app.run(host="0.0.0.0", port=5000, debug=True)
