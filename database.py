import sqlite3

from flask import g


def _get_db():
    if "db" not in g:
        g.db = sqlite3.connect("database.db", detect_types=sqlite3.PARSE_DECLTYPES)
        g.db.row_factory = sqlite3.Row
    return g.db


def _close_db():
    if (db := g.pop("db", None)) is not None:
        db.close()


def get_index_view_data():
    with (con := _get_db()):
        energy_drinks = con.execute(
            "SELECT brand, flavor, rating, description FROM energy_drinks ORDER BY brand"
        ).fetchall()
    return energy_drinks
