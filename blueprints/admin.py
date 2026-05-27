import os
from flask import Blueprint, render_template, request, redirect, url_for, flash, current_app
from werkzeug.utils import secure_filename
from models import Product, Category, db

admin_bp = Blueprint("admin", __name__, url_prefix="/admin")

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "webp"}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def save_image(file):
    """Save uploaded image to static/uploads/ and return the filename."""
    if file and file.filename and allowed_file(file.filename):
        fn = secure_filename(file.filename)
        upload_dir = current_app.config["UPLOAD_FOLDER"]
        os.makedirs(upload_dir, exist_ok=True)
        file.save(os.path.join(upload_dir, fn))
        return fn
    return None


# ── Dashboard ────────────────────────────────────────────────
@admin_bp.route("/")
@admin_bp.route("/dashboard")
def dashboard():
    return render_template("admin/dashboard.html")


# ── Analytics ────────────────────────────────────────────────
@admin_bp.route("/analytics")
def analytics():
    return render_template("admin/analytics.html")


# ── Products — List ──────────────────────────────────────────
@admin_bp.route("/products")
def products():
    items = Product.query.all()
    categories = Category.query.all()
    return render_template("admin/products.html", products=items, categories=categories)


# ── Products — Add ───────────────────────────────────────────
@admin_bp.route("/products/add", methods=["GET", "POST"])
def product_add():
    categories = Category.query.all()
    if request.method == "POST":
        title       = request.form.get("title", "").strip()
        price_raw   = request.form.get("price", "0").strip()
        description = request.form.get("description", "").strip()
        cat_id_raw  = request.form.get("cat_id", "").strip()

        # validate
        if not title:
            flash("Product title is required.", "danger")
            return render_template("admin/product_add.html", categories=categories)

        try:
            price = float(price_raw)
        except ValueError:
            flash("Price must be a number.", "danger")
            return render_template("admin/product_add.html", categories=categories)

        image_fn   = save_image(request.files.get("image")) or ""
        cat_id     = int(cat_id_raw) if cat_id_raw else None
        stock_raw  = request.form.get("stock", "0").strip()
        stock      = int(stock_raw) if stock_raw.isdigit() else 0
        status     = request.form.get("status", "active").strip()

        try:
            p = Product(
                title=title,
                price=price,
                image=image_fn,
                description=description,
                cat_id=cat_id,
                user_id=1,
                stock=stock,
                status=status,
            )
            db.session.add(p)
            db.session.commit()
            flash(f'Product "{title}" added successfully!', "success")
            return redirect(url_for("admin.products"))
        except Exception as e:
            db.session.rollback()
            flash(f"Database error: {e}", "danger")

    return render_template("admin/product_add.html", categories=categories)


# ── Products — View ──────────────────────────────────────────
@admin_bp.route("/products/<int:pro_id>")
def product_view(pro_id):
    p = Product.query.get_or_404(pro_id)
    return render_template("admin/product_view.html", product=p)


# ── Products — Edit ──────────────────────────────────────────
@admin_bp.route("/products/<int:pro_id>/edit", methods=["GET", "POST"])
def product_edit(pro_id):
    p = Product.query.get_or_404(pro_id)
    categories = Category.query.all()

    if request.method == "POST":
        title       = request.form.get("title", "").strip()
        price_raw   = request.form.get("price", "0").strip()
        description = request.form.get("description", "").strip()
        cat_id_raw  = request.form.get("cat_id", "").strip()

        if not title:
            flash("Product title is required.", "danger")
            return render_template("admin/product_edit.html", product=p, categories=categories)

        try:
            price = float(price_raw)
        except ValueError:
            flash("Price must be a number.", "danger")
            return render_template("admin/product_edit.html", product=p, categories=categories)

        new_image = save_image(request.files.get("image"))
        if new_image:
            p.image = new_image

        stock_raw = request.form.get("stock", "0").strip()

        p.title       = title
        p.price       = price
        p.description = description
        p.cat_id      = int(cat_id_raw) if cat_id_raw else p.cat_id
        p.stock       = int(stock_raw) if stock_raw.isdigit() else 0
        p.status      = request.form.get("status", "active").strip()

        try:
            db.session.commit()
            flash(f'Product "{title}" updated successfully!', "success")
            return redirect(url_for("admin.products"))
        except Exception as e:
            db.session.rollback()
            flash(f"Database error: {e}", "danger")

    return render_template("admin/product_edit.html", product=p, categories=categories)


# ── Products — Delete ─────────────────────────────────────────
@admin_bp.route("/products/<int:pro_id>/delete", methods=["POST"])
def product_delete(pro_id):
    p = Product.query.get_or_404(pro_id)
    title = p.title
    try:
        db.session.delete(p)
        db.session.commit()
        flash(f'Product "{title}" deleted.', "success")
    except Exception as e:
        db.session.rollback()
        flash(f"Error deleting product: {e}", "danger")
    return redirect(url_for("admin.products"))


# ── Other admin pages ─────────────────────────────────────────
@admin_bp.route("/orders")
def orders():
    return render_template("admin/orders.html")


@admin_bp.route("/customers")
def customers():
    return render_template("admin/customers.html")


@admin_bp.route("/users")
def users():
    return render_template("admin/users.html")


@admin_bp.route("/inventory")
def inventory():
    return render_template("admin/inventory.html")


@admin_bp.route("/coupons")
def coupons():
    return render_template("admin/coupons.html")


@admin_bp.route("/reviews")
def reviews():
    return render_template("admin/reviews.html")


@admin_bp.route("/payments")
def payments():
    return render_template("admin/payments.html")


@admin_bp.route("/cart")
def cart():
    return render_template("admin/cart.html")


@admin_bp.route("/settings")
def settings():
    return render_template("admin/settings.html")
