from flask import render_template
from product import product
from . import front_bp


@front_bp.get("/cart")
def cart():
    return render_template("front/cart.html", product=product)
