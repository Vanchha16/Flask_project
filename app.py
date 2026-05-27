import os
import requests
from flask import Flask, render_template, request
from product import product
from blueprints.admin import admin_bp
from flask_migrate import Migrate
from models import db, Product, User, Category, Cart  # ✅ import everything from models

app = Flask(__name__)
app.register_blueprint(admin_bp)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydb.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "vc-shop-secret-key"
app.config["UPLOAD_FOLDER"] = os.path.join(app.root_path, "static", "uploads")
db.init_app(app)  # ✅ only this, no SQLAlchemy(app)
migrate = Migrate(app, db)


@app.get("/")
def index():
    return render_template("front/home.html", product=product)

@app.get("/cart")
def cart():
    return render_template("front/cart.html", product=product)

@app.get("/payment")
def payment():
    return render_template("front/payment.html", product=product)

@app.get("/shop")
def shop():
    return render_template("front/shop.html", product=product)

@app.get("/detail")
def detail():
    pro_id = request.args.get("pro_id")
    title = request.args.get("title")
    price = request.args.get("price")
    image = request.args.get("image")
    category = request.args.get("category")
    description = request.args.get("description")
    return render_template("front/product_details.html", pro_id=pro_id, title=title, price=price, image=image, category=category, description=description)

@app.get("/profile")
def profile():
    return render_template("page/profile.html")

@app.get("/login")
def login():
    return render_template("page/login.html")

@app.get("/signup")
def signup():
    return render_template("page/signup.html")

@app.errorhandler(404)
def page_not_found(error):
    return render_template("error/404.html"), 404

@app.errorhandler(500)
def internal_server_error(error):
    return render_template("error/500.html"), 500

if __name__ == "__main__":
    app.run(debug=True)