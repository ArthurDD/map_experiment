from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)

# Details on the Secret Key: https://flask.palletsprojects.com/en/1.1.x/config/#SECRET_KEY
# NOTE: The secret key is used to cryptographically-sign the cookies used for storing
#       the session data.
app.secret_key = 'BAD_SECRET_KEY'


@app.route('/')
def home():
    return render_template('homepage/home.html')


@app.route('/set_name', methods=["GET", "POST"])
def set_name():
    if request.method == "POST":
        session['name'] = request.form['name']

    return redirect(url_for('home'))


@app.route('/display_map/<string:map_name>')
def display_map(map_name=None):
    if map_name is None:
        return "Error, no map name given."
    else:
        return render_template('map/county_map.html', map_name=map_name)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8888, debug=True)
