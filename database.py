import sqlite3

from flask import g


def _get_db() -> sqlite3.Connection:
    """Return the existing/new DB connection"""
    if "db" not in g:
        g.db = sqlite3.connect("database.db", detect_types=sqlite3.PARSE_DECLTYPES)
        g.db.row_factory = sqlite3.Row
    return g.db


def _close_db() -> None:
    """Close the existing DB connection"""
    if (db := g.pop("db", None)) is not None:
        db.close()


def get_index_view_data() -> list:
    """Return all rows from DB as list"""
    with (con := _get_db()):
        energy_drinks = con.execute(
            "SELECT brand, flavor, rating, description FROM energy_drinks ORDER BY brand"
        ).fetchall()
    return energy_drinks
