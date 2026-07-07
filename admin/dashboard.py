from flask import render_template
from . import admin_bp


@admin_bp.route("/dashboard")
def dashboard():
    return render_template("admin/page/dashboard.html")
