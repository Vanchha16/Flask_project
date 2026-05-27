from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)

class Category(db.Model):
    cat_id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=False)

class Product(db.Model):
    pro_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(200), nullable=False, default='')
    description = db.Column(db.Text, nullable=False, default='')
    cat_id = db.Column(db.Integer, db.ForeignKey('category.cat_id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    stock  = db.Column(db.Integer, nullable=True, default=0)
    status = db.Column(db.String(20), nullable=True, default='active')
    # relationship – lets templates use p.category.category_name
    category = db.relationship('Category', backref='products', lazy=True)

class Cart(db.Model):
    cart_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    pro_id = db.Column(db.Integer, db.ForeignKey('product.pro_id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)