from flask import Flask, render_template

app = Flask(__name__)

@app.route('/author')
def author():
    return render_template("author.html")
@app.route('/')
def main():
    return render_template("index.html")
@app.route('/results')
def results():
    return render_template("results.html")
@app.route('/procedure')
def procedure():
    return render_template("procedure.html")
@app.route('/workscited')
def workscited():
    return render_template("workscited.html")

if __name__ == '__main__':

    # Run the Flask app on the local development server
    app.run(debug=True)