from flask import render_template
from product import product
from . import front_bp


@front_bp.get("/payment")
def payment():
    return render_template("front/payment.html", product=product)
