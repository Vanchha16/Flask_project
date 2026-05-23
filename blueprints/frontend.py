from flask import Blueprint, render_template, request
from product import product

frontend_bp = Blueprint("frontend", __name__)


@frontend_bp.get("/")
def index():
    return render_template("front/home.html", product=product)


@frontend_bp.get("/shop")
def shop():
    return render_template("front/shop.html", product=product)


@frontend_bp.get("/cart")
def cart():
    return render_template("front/cart.html", product=product)


@frontend_bp.get("/payment")
def payment():
    return render_template("front/payment.html", product=product)


@frontend_bp.get("/detail")
def detail():
    pro_id = request.args.get("pro_id")
    title = request.args.get("title")
    price = request.args.get("price")
    image = request.args.get("image")
    category = request.args.get("category")
    description = request.args.get("description")
    return render_template(
        "front/product_details.html",
        pro_id=pro_id, title=title, price=price,
        image=image, category=category, description=description,
    )


@frontend_bp.get("/profile")
def profile():
    return render_template("page/profile.html")


@frontend_bp.get("/login")
def login():
    return render_template("page/login.html")


@frontend_bp.get("/signup")
def signup():
    return render_template("page/signup.html")
