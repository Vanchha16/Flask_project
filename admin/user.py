from flask import render_template
from . import admin_bp


@admin_bp.route("/user")
def user():
    return render_template("admin/page/users.html")