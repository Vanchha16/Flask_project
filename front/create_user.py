from flask import render_template
from . import front_bp


@front_bp.get("/profile")
def profile():
    return render_template("page/profile.html")


@front_bp.get("/login")
def login():
    return render_template("page/login.html")


@front_bp.get("/signup")
def signup():
    return render_template("page/signup.html")
