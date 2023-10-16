from flask import Flask, render_template

from database import get_index_view_data


app = Flask(__name__)


@app.get("/")
def index() -> str:
    """Index page view"""
    return render_template("index.html", energy_drinks=get_index_view_data())
