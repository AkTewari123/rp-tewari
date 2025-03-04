from flask import Flask, render_template

app = Flask(__name__)
posts = [
    {'author': 'Gandalf', 'title': 'my hobbit', 'content': 'Remy Mander', 'date': '3/2/24', 'readers': 11003234},
    {
        'author': 'Frodo', 'title': 'The Lord of the Rings', 'content': 'Harry Potter\'s nice wand', 'date': '3/5/24', 'readers': 125
    }
]

@app.route('/author')
def author():
    return render_template("author.html")
@app.route('/')
def main():
    return render_template("index.html", title = "About")
@app.route('/results')
def results():
    return render_template("results.html", title = "About")
@app.route('/procedure')
def procedure():
    return render_template("procedure.html", title = "About")
@app.route('/workscited')
def workscited():
    return render_template("workscited.html", title = "About")

if __name__ == '__main__':

    # Run the Flask app on the local development server
    app.run(debug=True)