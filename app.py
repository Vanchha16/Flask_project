from flask import Flask, render_template
from config import Config
from extensions import db, migrate
from front import front_bp
from admin.route import admin_bp
from api.route import api_bp
import models


app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
migrate.init_app(app, db)

app.register_blueprint(front_bp)
app.register_blueprint(admin_bp)
app.register_blueprint(api_bp)


@app.errorhandler(404)
def page_not_found(error):
    return render_template("error/404.html"), 404


@app.errorhandler(500)
def internal_server_error(error):
    return render_template("error/500.html"), 500


if __name__ == "__main__":
    app.run(debug=True)
