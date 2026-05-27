from flask import Blueprint, render_template

admin_bp = Blueprint("admin", __name__, url_prefix="/admin")


@admin_bp.route("/")
@admin_bp.route("/dashboard")
def dashboard():
    return render_template("admin/dashboard.html")


@admin_bp.route("/products")
def products():
    return render_template("admin/products.html")


@admin_bp.route("/categories")
def categories():
    return render_template("admin/categories.html")


@admin_bp.route("/orders")
def orders():
    return render_template("admin/orders.html")


@admin_bp.route("/payments")
def payments():
    return render_template("admin/payments.html")


@admin_bp.route("/cart")
def cart():
    return render_template("admin/cart.html")


@admin_bp.route("/customers")
def customers():
    return render_template("admin/customers.html")


@admin_bp.route("/users")
def users():
    return render_template("admin/users.html")
