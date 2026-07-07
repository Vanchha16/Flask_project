from flask import Flask, render_template
from config import Config
from extensions import db, migrate
from front import front_bp
from admin.master import admin_bp
import models

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate.init_app(app, db)

app.register_blueprint(front_bp)
app.register_blueprint(admin_bp)

if __name__ == "__main__":
    app.run(debug=True)
