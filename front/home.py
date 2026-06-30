from flask import render_template
from product import product
from . import front_bp


@front_bp.get("/")
def index():
    return render_template("front/home.html", product=product)


@front_bp.get("/shop")
def shop():
    return render_template("front/shop.html", product=product)
