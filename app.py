import sqlite3

from flask import Flask, render_template, g


app = Flask(__name__)


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect("database.db", detect_types=sqlite3.PARSE_DECLTYPES)
        g.db.row_factory = sqlite3.Row

    return g.db


def close_db():
    if (db := g.pop("db", None)) is not None:
        db.close()


@app.get("/")
def index():
    return render_template("index.html")
